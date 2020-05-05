

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Articles from '../components/Articles'
import Article from '../components/Article'
import axios from 'axios';

const Stack = createStackNavigator();


export default function ArticlesPage(props) {

  const [articles, setArticles] = useState([])

  //Se fait au premier chargement du composant
  useEffect(() => {
    axios.get('https://5eb15fa7e6828200164a772e.mockapi.io/api/articles')
      .then((response) => {
        setArticles(response.data)
      })
  }, [])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Articles"
        component={(props) => <Articles
          articles={articles}
          onArticleCardPress={(article) => props.navigation.navigate('Article', { article: article })}
        />}
        options={{ title: 'Articles' }}
      />
      <Stack.Screen name="Article" component={(props) => <Article article={props.route.params.article} />} />
    </Stack.Navigator>
  )
}