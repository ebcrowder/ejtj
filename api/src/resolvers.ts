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
    async deleteTrip(parent, args, context) {
      const where = { id: args.id };
      // 1. find the item
      const trip = await context.prisma.trip(
        { where },
        `{ id title user { id }}`
      );
      // 2. Check if they own that item, or have the permissions
      // const ownsItem = item.user.id === ctx.request.userId;
      // const hasPermissions = ctx.request.user.permissions.some(permission =>
      //   ['ADMIN', 'ITEMDELETE'].includes(permission)
      // );

      // if (!ownsItem && !hasPermissions) {
      //   throw new Error("You don't have permission to do that!");
      // }

      // 3. Delete it!
      return context.prisma.deleteTrip({ where });
    }
  }
};
