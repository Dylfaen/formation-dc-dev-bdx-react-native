

import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from 'react-native';
import ArticleCard from './ArticleCard';
export default function Articles(props) {

  return (
    <FlatList
      data={props.articles}
      renderItem={(data) => {
        return <ArticleCard article={data.item} onPress={props.onArticleCardPress} />
      }}
      keyExtractor={item => item.id}
    />
  );


}