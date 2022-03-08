import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../graphql/queries';

const SearchResultsScreen = props => {
  const {posts} = props;
  console.log('in SearchResultsScreenPa', posts);

  return (
    <View style={{height: '100%'}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post key={item.id} post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
