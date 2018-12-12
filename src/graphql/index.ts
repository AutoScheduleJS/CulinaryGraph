import { ApolloServer } from 'apollo-server-express';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { v1 as Neo } from 'neo4j-driver';
import { typeDefs } from './schema';

const schema = makeAugmentedSchema({ typeDefs });
const driver = Neo.driver(
  'bolt://localhost',
  Neo.auth.basic('neo4j', 'admin')
);

export const apolloServer = new ApolloServer({ schema, context: { driver }});
