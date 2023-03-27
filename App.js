import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Streamt from "./Streamt";


function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Streamt />
    </NavigationContainer>
    </NativeBaseProvider>)
    }
export default App;
