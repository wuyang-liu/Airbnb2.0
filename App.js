/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import Feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import LocationSearch from './src/screens/LocationSearch';
import GuestScreen from './src/screens/Guests';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen />*/}
        {/*{Feed.map(post => (*/}
        {/*  <Post key={post.id} post={post} />*/}
        {/*))}*/}
        {/*<SearchResultsScreen />*/}
        {/*<LocationSearch />*/}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
