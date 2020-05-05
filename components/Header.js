import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


export default function Header(props) {

  return (
    <View style={styles.header}> 
      <Text style={styles.title}>DC lab</Text>
      {props.user !== undefined &&
        <View style={styles.profileButton}>
          <Text>{props.user.firstname} {props.user.lastname}</Text>
          <Button onPress={props.onLogout} title="Deconnexion" />
        </View>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {

  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})