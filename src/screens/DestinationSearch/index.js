import React from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearch = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where is your next stay?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          textInputProps={{
            placeholderTextColor: '#a3a6a3',
          }}
          query={{
            key: 'AIzaSyDCYFXCvSPpeY9r7MFIF2lmZzO8QOT8_A4',
            language: 'en',
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationSearch;
