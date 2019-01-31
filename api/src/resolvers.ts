import { forwardTo } from 'prisma-binding';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const resolvers = {
  Query: {
    trips: forwardTo('prisma'),
    trip: forwardTo('prisma'),
    tripsConnection: forwardTo('prisma'),
    users: forwardTo('prisma'),
    user: forwardTo('prisma')
  },
  Mutation: {
    createTrip(_, args, context, info) {
      return context.prisma.mutation.createTrip({
        data: {
          ...args
        },
        info
      });
    },
    updateTrip(_, args, context, info) {
      // first take a copy of the updates
      const updates = { ...args };
      // remove the ID from the updates
      delete updates.id;
      // run the update method
      return context.prisma.mutation.updateTrip({
        data: updates,
        where: {
          id: args.id
        }
      });
    },
    deleteTrip(_, args, context, info) {
      const where = { id: args.id };
      return context.prisma.mutation.deleteTrip({ where });
    },
    async signup(_, args, context, info) {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.mutation.createUser({
        data: { ...args, password }
      });

      context.request.session.userId = user.id;

      return user;
    },
    async signin(_, { email, password }, context, info) {
      const user = await context.prisma.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }

      context.request.session.userId = user.id;

      return user;
    },
    async logout(parent, args, context) {
      if (!context.request.session) throw new Error('auth_error');

      context.request.session.destroy();

      return { status: false };
    }
  }
};
