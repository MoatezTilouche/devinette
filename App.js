import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Login from './component/login'
import Game from './component/Game'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function App() {
 return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
    />
    <Stack.Screen 
    name="Game"
    component={Game}
    initialParams={{ randomNumber: Math.floor(Math.random() * 101) }}
    />
      </Stack.Navigator>
    </NavigationContainer>
 );
}
