import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$43</Text>
        <Text style={styles.price}>$36</Text>/ night
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
