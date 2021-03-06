/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import {withAuthenticator} from 'aws-amplify-react-native/src/Auth';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
