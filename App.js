import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ArticlesPage from './pages/Articles';
import Profile from './pages/Profile';
import Header from './components/Header';


const Tab = createBottomTabNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
      />
      <Header/>
      <Tab.Navigator>
        <Tab.Screen
          name="PageArticles"
          component={ArticlesPage}
          options={{ title: 'Articles' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


