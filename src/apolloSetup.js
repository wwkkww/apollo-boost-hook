import { HttpLink, ApolloClient, InMemoryCache } from "apollo-boost";


const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjs4qo29b2w0c0130tfx6maca'
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default apolloClient;