import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import typeBundle from './types';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import '../../shared/app.css';
import App from "./App";

  const shopify_query = gql`
  {
  products(first: 10) {
    edges {
      node {
        id
        title
        description
        priceRange {
          maxVariantPrice {
        		amount
        		currencyCode
      		}
      		minVariantPrice {
        		amount
        		currencyCode
      		}
        }
        images(first: 3) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
`;
const client = new ApolloClient({
  uri: "https://graphql.myshopify.com/api/graphql",
  cache: new InMemoryCache()
});

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   rootElement
// );
data = await client.query({query: shopify_query})
ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);

