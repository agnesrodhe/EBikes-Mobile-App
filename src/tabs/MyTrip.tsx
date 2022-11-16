import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../components/mytrip/Index';
import Map from '../components/mytrip/Map';

const Stack = createNativeStackNavigator();

export default function MyTrip() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index}  options={{headerShown:false}} ></Stack.Screen>
      <Stack.Screen name="Nuvarande resa" component={Map} ></Stack.Screen>
  </Stack.Navigator>
  );
}