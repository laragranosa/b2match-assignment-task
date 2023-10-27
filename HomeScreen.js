import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import CountryScreen from './CountryScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{title: "Countries"}}/>
        <Stack.Screen name="CountryScreen" component={CountryScreen} options={{headerTitle: ''}} />
      </Stack.Navigator>
  );
};

export default HomeScreen;
