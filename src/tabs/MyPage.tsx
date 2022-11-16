import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../components/mypage/Index';
import ManageMoney from '../components/mypage/ManageMoney';
import TripHistory from '../components/mypage/TripHistory';

const Stack = createNativeStackNavigator();

export default function MyPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index}  options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="För över pengar" component={ManageMoney}></Stack.Screen>
      <Stack.Screen name="Resehistorik" component={TripHistory}></Stack.Screen>
  </Stack.Navigator>
  );
}