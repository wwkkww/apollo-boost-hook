import React, { Component } from 'react';
// import { ApolloProvider, Query } from "react-apollo"; // for Query Component
import { ApolloProvider, useQuery } from '@apollo/react-hooks'; // for new useQuery hook
import apolloClient from './apolloSetup';
import Posts from './posts/Posts';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Posts />
  </ApolloProvider>
);

export default App;

