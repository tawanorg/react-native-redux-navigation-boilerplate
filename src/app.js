import React, { Component } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./stores";

import { AppContainer } from './modules';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

