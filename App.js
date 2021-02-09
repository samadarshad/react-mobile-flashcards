import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import middleware from './middleware'
import reducer from './reducers'
import Main from './Main'
export default class App extends Component {

  render() {
    const store = createStore(reducer, middleware)

    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    );
  }
}

