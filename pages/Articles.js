
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Articles from '../components/Articles';
import Article from '../components/Article';

const Stack = createStackNavigator();



export default function ArticlesPage(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{ title: 'Articles' }}
      />
      <Stack.Screen
        name="Article"
        component={(props) => <Article {...props} article={props.route.params.article} />}
        options={{ title: 'Article' }} />
    </Stack.Navigator>
  )
}

