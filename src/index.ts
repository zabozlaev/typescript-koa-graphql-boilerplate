import * as Koa from 'koa';
import * as Parser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as session from 'koa-session';
import * as logger from 'koa-logger';
import { ApolloServer, gql } from 'apollo-server-koa';
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

import * as redis from 'ioredis';

import { sequelize } from './database';

const app = new Koa();
app.use(cors());
app.use(Parser());
app.use(logger());
server.applyMiddleware({ app });
setTimeout(async () => {
  const client = new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT as any
  });

  client
    .ping()
    .then(console.log)
    .catch(console.log);

  await sequelize.sync({ force: true });
  const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  };
  app.use(session(CONFIG, app));

  app.listen(8888, '0.0.0.0', () => {
    console.log('listening');
  });
}, 5000);
