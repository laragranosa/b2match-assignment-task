import { ApolloClient, InMemoryCache, useQuery, gql, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './TabScreen';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <NavigationContainer>
    <ApolloProvider client={client}>
      <TabScreen/>
    </ApolloProvider>
  </NavigationContainer>);
};