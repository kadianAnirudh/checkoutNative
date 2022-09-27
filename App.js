import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import bgImage from './assets/background.png'
import Home from './components/HomeScreen.js'
import Page2 from './components/HomeScreen.js'
import Page3 from './components/Page3.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        /> 
        <Stack.Screen
        name="Page2"
        component={Page2}
        /> 
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,          
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: url(bgImage)
  },

  background: {
    height: '100%',
    width: '100%', 
    backgroundImage: (bgImage)
  }
});
