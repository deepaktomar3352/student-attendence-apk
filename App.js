import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './navigation/RootNavigation';
import Notification from './screens/Notification';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen  name='Mytabs' component={MyTabs}></Stack.Screen>
        <Stack.Screen  name='Notification' component={Notification}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
