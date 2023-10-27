import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import ListItem from './components/list-item/listItem';
import { SearchBar } from 'react-native-elements';

const GET_COUNTRIES = gql`
  query GetCountries ($search: CountryFilterInput) {
      countries (filter: $search) {
    emoji
    name
    code
  }
    }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});


const MainScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const updateSearch = (search) => {
    setSearchQuery(search);
  };
  const { data, loading, error, refetch } = useQuery(GET_COUNTRIES, { variables: { search: { name: { regex: searchQuery } } }});
  const navigation = useNavigation();
  if (loading) return <ActivityIndicator/>;
  if (error) return <Text>{error.message}</Text>;

  if (data) return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar
        placeholder="Search countries..."
        onChangeText={updateSearch}
        value={searchQuery}
        platform={"ios"}
      />
      <FlatList
        data={data.countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
      />
    </View>
  );
}
MainScreen.displayName = 'MainScreen'
export default MainScreen;