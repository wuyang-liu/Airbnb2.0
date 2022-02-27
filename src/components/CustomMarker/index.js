import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? '#f15454' : 'white',
          padding: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#f15454',
        }}>
        <Text
          style={{fontWeight: 'bold', color: isSelected ? 'white' : '#f15454'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
