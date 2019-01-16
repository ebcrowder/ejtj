import { forwardTo } from 'prisma-binding';

export const resolvers = {
  Query: {
    trips: forwardTo('prisma'),
    trip: forwardTo('prisma'),
    tripsConnection: forwardTo('prisma')
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
    async deleteTrip(_, args, context, info) {
      const where = { id: args.id };
      return context.prisma.mutation.deleteTrip({ where });
    }
  }
};
