import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/screens/HomeScreen';
import CarListScreen from './src/screens/CarListScreen';
import CarDetailsScreen from './src/screens/CarDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Homescreen}/>
        <Stack.Screen name="CarListScreen" component={CarListScreen}/>
        <Stack.Screen name="CarDetailScreen" component={CarDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}