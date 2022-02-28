import React from 'react';
import {Image, Pressable, Text, useWindowDimensions, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const onPostPressed = () => {
    navigation.navigate('Post', {
      postId: post.id,
    });
  };
  return (
    <Pressable
      onPress={onPostPressed}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 5}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice}</Text> /night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
