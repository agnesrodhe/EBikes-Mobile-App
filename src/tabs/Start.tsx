import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Index from '../components/start/Index';
import Login from '../components/start/Login';
import Register from '../components/start/Register';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Start({ setIsLoggedIn }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
                  name="Startsida"
                  options={{headerShown:false}} 
                  >
                  {(screenProps) => <Index {...screenProps} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>

        <Stack.Screen 
                  name="Logga in" 
                  options={{
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      color: 'transparent'
                    },
                  }}
                  >
                  {(screenProps) => <Login {...screenProps} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>

        <Stack.Screen 
                  name="Registrera" 
                  options={{
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      color: 'transparent'
                    },
                  }}
                  >
                  {(screenProps) => <Register {...screenProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}