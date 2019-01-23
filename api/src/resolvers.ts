import { forwardTo } from 'prisma-binding';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const resolvers = {
  Query: {
    trips: forwardTo('prisma'),
    trip: forwardTo('prisma'),
    tripsConnection: forwardTo('prisma'),
    users: forwardTo('prisma')
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
      // lowercase their email
      args.email = args.email.toLowerCase();
      // hash their password
      const password = await bcrypt.hash(args.password, 10);
      // create the user in the database
      const user = await context.prisma.mutation.createUser(
        {
          data: {
            ...args,
            password,
            permissions: { set: ['ADMIN'] }
          }
        },
        info
      );

      // create the JWT token for them and return the user to the browser
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    },
    async signin(_, { email, password }, context, info) {
      // 1. check if there is a user with that email
      const user = await context.prisma.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email ${email}`);
      }
      // 2. Check if their password is correct
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid Password!');
      }

      // create the JWT token for them and return the user to the browser
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    }
  }
};
