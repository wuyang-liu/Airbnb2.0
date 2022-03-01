import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../graphql/queries';

const SearchResultsMap = props => {
  const [selectedPostId, setSelectedPostId] = React.useState(null);
  const {posts} = props;
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const postsResult = await API.graphql(graphqlOperation(listPosts));
  //       // console.log(postsResult);
  //       setPosts(postsResult.data.listPosts.items);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  const flatList = useRef();
  const mapRef = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setSelectedPostId(viewableItems[0].item.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPostId || !flatList) {
      return;
    }
    const index = posts.findIndex(post => post.id === selectedPostId);
    flatList.current.scrollToIndex({index});

    const {latitude, longitude} = posts[index];

    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPostId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {posts.map(post => (
          <CustomMarker
            key={post.id}
            coordinate={{latitude: post.latitude, longitude: post.longitude}}
            price={post.newPrice}
            isSelected={post.id === selectedPostId}
            onPress={() => setSelectedPostId(post.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({item}) => (
            <PostCarouselItem key={item.id} post={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
