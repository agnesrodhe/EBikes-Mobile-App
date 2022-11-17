import React from 'react';

import Index from '../components/findscooter/Index';
import Map from '../components/findscooter/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function FindScooter({ setIsLoggedIn }) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
                  name="Index" 
                  options={{headerShown:false}} 
                  >
                  {(screenProps) => <Index {...screenProps} setIsLoggedIn={setIsLoggedIn} />}
                  </Stack.Screen>

        <Stack.Screen name="Välj en elsparkcykel" component={Map} ></Stack.Screen>
      </Stack.Navigator>
  );
}