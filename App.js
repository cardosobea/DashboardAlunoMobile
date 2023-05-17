import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#005594',
     
      },
      headerTintColor: '#fff', // cor do texto do cabeçalho
      headerTitleStyle: {
        fontWeight: 'bold', // estilo do texto do cabeçalho
        fontSize: 16
      },
      headerTitleAlign: 'left', // alinhamento do texto do cabeçalho
      headerRight: () => (
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bell" size={20} color="#F7941D" />
        </TouchableOpacity>
      ), // botão de navegação direito
    }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Activities" component={ActivitiesScreen} />
  </Stack.Navigator>
</NavigationContainer>
)}


const styles = StyleSheet.create({
  iconButton: {
    marginRight: 15,
    marginLeft: 15,
  },
});

