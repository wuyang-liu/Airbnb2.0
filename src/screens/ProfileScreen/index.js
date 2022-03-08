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
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          marginTop: 300,
          alignItems: 'center',
          justifyContent: 'center',
          width: '60%',
          height: 40,
          backgroundColor: 'rgba(241,84,84,0.64)',
        }}
        onPress={logout}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
