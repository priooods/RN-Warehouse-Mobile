/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import Router from './src/routers';

class App extends Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}

export default App;
