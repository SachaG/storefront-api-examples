import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import '../../shared/app.css';

const networkInterface = createNetworkInterface({ uri: 'https://graphql.myshopify.com/api/graphql' });
// const networkInterface = createNetworkInterface({ uri: 'https://hariko.myshopify.com/api/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers['X-Shopify-Storefront-Access-Token'] = 'dd4d4dc146542ba7763305d71d1b3d38'
    // req.options.headers['X-Shopify-Storefront-Access-Token'] = 'c3cec89ab049637c440fb2f7d278911e'
    next();
  }
}]);
const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById('root')
);
