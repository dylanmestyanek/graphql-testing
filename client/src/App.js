import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Queries from "./components/Queries";
import './App.css';

const client = new ApolloClient({ 
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Testing GraphQL </h1>
        <Queries />
      </div>
    </ApolloProvider>
  );
}

export default App;
