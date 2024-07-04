import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profil from './screen/Profil';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Template from './screen/Template';
import Edit from './screen/Edit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      
      }} />

     <Tab.Screen name='Template' component={Template} options={{
          tabBarLabel: 'Template',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightning-bolt" color={color} size={26} />
          ),
      
      }} />

    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='root' component={BottomTab} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Edit' component={Edit} />
      </Stack.Navigator>
   </NavigationContainer>
  );
};
  

export default App

const styles = StyleSheet.create({});