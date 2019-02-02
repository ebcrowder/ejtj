import { GraphQLServer } from 'graphql-yoga';
import * as session from 'express-session';
import { Prisma } from 'prisma-binding';
import { resolvers } from './resolvers';

const cors = require('cors');

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
        endpoint: process.env.PRISMA_ENDPOINT,
        debug: true
      })
    };
  }
});

server.express.use(
  session({
    name: 'qid',
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

server.express.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

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
