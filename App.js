import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Article from './components/Article';

import Articles from './components/Articles';
import Home from './components/Home';
import Header from './components/Header';


const Stack = createStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
      />
      <Header/>
      <Stack.Navigator>
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{ title: 'Articles' }}
        />
        <Stack.Screen
          name="Article"
          component={(props) => <Article {...props} article={props.route.params.article}/>}
          options={{ title: 'Article' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


