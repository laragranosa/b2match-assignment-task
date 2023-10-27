import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import InfoScreen from './Infoscreen';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Countries" component={HomeScreen} options={{title: 'Countries', headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="earth-outline" // Set the icon names based on the tab's focus state
              size={size}
              color={color}
            />
          ),}}/>
      <Tab.Screen name="Info" component={InfoScreen} options={{title: 'Info',
    tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline" // Set the icon names based on the tab's focus state
              size={size}
              color={color}
            />
          ),}}/>
    </Tab.Navigator>
  );
};

export default TabScreen;
