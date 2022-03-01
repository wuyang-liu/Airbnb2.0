import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../graphql/queries';

const SearchResultsScreen = props => {
  // const [posts, setPosts] = useState([]);
  const {posts} = props;
  console.log('posts', posts);
  // const {totalGuests} = props;
  // console.log(totalGuests);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const postsResult = await API.graphql(
  //         graphqlOperation(listPosts, {
  //           filter: {
  //             maxGuests: {
  //               ge: totalGuests,
  //             },
  //           },
  //         }),
  //       );
  //       // console.log(postsResult);
  //       setPosts(postsResult.data.listPosts.items);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post key={item.id} post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
