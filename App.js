import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ArticlesPage from './pages/Articles.page';
import ProfilePage from './pages/Profile.page';
import LoginPage from './pages/Login.page';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

export default function App() {


  const [loggedInUser, setLoggedInUser] = useState();


  const handleLoginSuccessful = (user) => {
    setLoggedInUser(user)
  }

  const handleLogout = () => {
    setLoggedInUser(undefined)
  }


  return (
    <View style={styles.container}>
      <Header user={loggedInUser} onLogout={handleLogout}/>
      {loggedInUser &&
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Articles" component={ArticlesPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
          </Tab.Navigator>
        </NavigationContainer>
      }
      {!loggedInUser &&
        <LoginPage onLoginSuccessful={handleLoginSuccessful}/>
      }
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
});



