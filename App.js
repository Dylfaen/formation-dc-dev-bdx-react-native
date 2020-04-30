import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



import Todo from './components/Todo'


export default function App() {

  return (
    <Todo/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
});



