import React, { useState, useEffect, Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";
import { StatusBar } from 'expo-status-bar';

import FindScooter from '../tabs/FindScooter';
import MyTrip from '../tabs/MyTrip';
import MyPage from '../tabs/MyPage';

const Tab = createBottomTabNavigator();

const routeIcons = {
  "Hitta elsparkcykel": "scooter",
  "Min resa": "human-scooter",
  "Min sida": "account-circle"
};

export default function TabNav({ setIsLoggedIn }) {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = routeIcons[route.name] || "alert";

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: '#FFF'}
        })}
        >

        <Tab.Screen name="Hitta elsparkcykel" options={{headerShown:false}} >{() => <FindScooter setIsLoggedIn={setIsLoggedIn} />}</Tab.Screen>
        <Tab.Screen name="Min resa" component={MyTrip} options={{headerShown:false}} />
        <Tab.Screen name="Min sida" component={MyPage} options={{headerShown:false}} />

      </Tab.Navigator>
      <FlashMessage position="top" />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}