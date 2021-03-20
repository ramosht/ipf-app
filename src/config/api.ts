import { ApolloClient, InMemoryCache } from '@apollo/client';

export const uri = 'http://192.168.0.7:1337';

const client = new ApolloClient({
  uri: `${uri}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
