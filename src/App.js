import React, { Component } from 'react';
// import { ApolloProvider, Query } from "react-apollo"; // for Query Component
import { ApolloProvider, useQuery } from '@apollo/react-hooks'; // for new useQuery hook
import apolloClient from './apolloSetup';
import Posts from './posts/Posts';

/**
 * NOTE: Easiest way to start/test GraphQL queries
 */
// const c = new ApolloClient({
//   uri: 'https://api.graph.cool/simple/v1/cjs4qo29b2w0c0130tfx6maca'})
// c.query({ query: helloWorldQuery }).then((result) => console.log('query result:', result))

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Posts />
  </ApolloProvider>
);

export default App;

