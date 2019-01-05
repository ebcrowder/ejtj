export const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    }
  },
  Mutation: {
    signup: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            name: args.name
          }
        },
        info
      );
    }
  }
};
