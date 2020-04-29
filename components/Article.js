import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


export default function Article(props) {

  console.log(props)

  let stringDate = "" + props.article.publishingDate
  let img
  if(props.article.img) {
    img = require('../assets/img/corgi.jpg');
  }

  console.log(img)

  return (
    <View style={styles.article}>
      <View style={styles.articleHeader}>
        <Image
          style={styles.articlePic}
          source={img}
        />
        <Text style={styles.articleTitle}>{props.article.title}</Text>
      </View>

      <ScrollView>
        <View style={styles.articleBody}>
          <Text style={styles.articleContent}>{props.article.content}</Text>
          <View style={styles.articleFooter}>
            <Text style={styles.articleDate}>Date de publication : {stringDate}</Text>
            <Text style={styles.articleAuthor}>Ecrit par : {props.article.author.firstname} {props.article.author.lastname}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  article: {
    alignItems: "stretch",
    justifyContent: 'flex-start',
    flex: 1,
  },
  articleHeader: {
    height: 200,
    justifyContent: "center",
  },
  articlePic: {
    width: null,
    height: 200,
  },
  articleTitle: {
    position: "absolute",
    alignSelf: "center",
    marginBottom: 40,
    fontSize: 40,
    zIndex: 0,
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  articleBody: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    backgroundColor: "white"
  },
  articleAuthor: {
    marginBottom: 20,
  },
  articleContent: {
    marginTop: 40,
    marginBottom: 40,
  },
  articleFooter: {
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  articleDate: {
    maxWidth: "50%",
  }
});