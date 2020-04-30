import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ArticlesPage from './pages/Articles.page';
import ProfilePage from './pages/Profile.page';

const Tab = createBottomTabNavigator();

export default function App() {







  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Articles" component={ArticlesPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
});



