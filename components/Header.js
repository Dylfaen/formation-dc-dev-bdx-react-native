import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
  return ( 
  <View style={styles.container}>
    <Text style={styles.title}>DC Lab</Text>
  </View>
   );
}


const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: 'white',
  }
})