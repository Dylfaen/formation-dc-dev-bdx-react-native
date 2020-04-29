import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';




export default function ArticleCard(props) {

  let img;

  if (props.article.img) {
    img = require('../assets/img/corgi.jpg');
  }


  return (
    <TouchableHighlight onPress={() => {

      props.onPress()
    }}
      underlayColor="white"
    >
      <View style={styles.container} >
        {/* <Image source={img}/> */}
        <Text>{props.article.title}</Text>
        <Text>{props.article.content}</Text>
      </View>
    </TouchableHighlight>

  )
}


const styles = StyleSheet.create({
  container: {
    elevation: 1,
    height: 200,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "white",
    padding: 10,
  },

});