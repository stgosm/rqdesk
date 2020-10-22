import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3001/graphql ',
  })
})

const query = gql`
query{
  users {
    userName
  }
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data)
});

ReactDOM.render(
  <ApolloProvider client={client}>    
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
