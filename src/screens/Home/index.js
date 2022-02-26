import React from 'react';
import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/alexa-west-dUPfhP18dPI-unsplash.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.warn('Explore Btn clicked');
          }}>
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
