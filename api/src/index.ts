import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import { resolvers } from './resolvers';

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => {
    return {
      ...req,
      prisma: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: process.env.PRISMA_ENDPOINT
      })
    };
  }
});

server.express.use(cookieParser());

// decode the JWT so we can get the user Id on each request
server.express.use((req: any, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// 2. Create a middleware that populates the user on each request

server.express.use(async (req: any, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await req.prisma.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets =>
    console.log(`GraphQL server is running on http://localhost:${deets.port}`)
);
