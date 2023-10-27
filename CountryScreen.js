import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import Card from './components/country-card/Card';
import { ActivityIndicator } from 'react-native';


const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      continent {
        name
      }
      currency
      emoji
      languages {
        name
        native
      }
      name
      phone
    }
  }
`;

const CountryScreen = ( {route} ) => {
  const itemCode = route.params.item.code;
  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, { variables: { code: itemCode } });
  if (loading) return <ActivityIndicator/>;
  if (error) return <Text>{error.message}</Text>;

  if (data) return (
    <Card country={data.country}/>
  );
}
CountryScreen.displayName = 'CountryScreen'
export default CountryScreen;