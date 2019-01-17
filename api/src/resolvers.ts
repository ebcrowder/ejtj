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

      // create the JWT token for them
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // We set the jwt as a cookie on the response
      context.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
      });

      // return the user to the browser
      return user;
    }
  }
};
