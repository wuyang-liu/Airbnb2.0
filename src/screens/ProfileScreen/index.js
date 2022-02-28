import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';

const ProfileScreen = props => {
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{width: '100%', height: 40, backgroundColor: '#c3c3c3'}}
        onPress={logout}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
