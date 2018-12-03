import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: string
  }
`);

const rootValue = { hello: () => 'Hello world!' };

export const graphqlHandler = (_) => {
  return graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  });
};
