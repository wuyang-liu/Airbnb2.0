import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  const route = useRoute();
  const {totalGuests, viewport} = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsResult = await API.graphql(
        graphqlOperation(listPosts, {
          filter: {
            and: {
              maxGuests: {
                ge: totalGuests,
              },
              latitude: {
                between: [viewport.southwest.lat, viewport.northeast.lat],
              },
              longitude: {
                between: [viewport.southwest.lng, viewport.northeast.lng],
              },
            },
          },
        }),
      );
      console.log(postsResult);
      setPosts(postsResult.data.listPosts.items);
    };
    fetchPosts().catch(error => console.log(error));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'}>
        {() => <SearchResultsScreen posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
