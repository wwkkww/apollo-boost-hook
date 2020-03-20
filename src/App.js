import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloSetup';
import Posts from './posts/Posts';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Posts />
  </ApolloProvider>
);

export default App;

