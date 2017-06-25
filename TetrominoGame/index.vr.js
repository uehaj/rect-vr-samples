import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  AmbientLight,
  PointLight,
} from 'react-vr';
import App from './src/App';
import configureStore from './src/configureStore';

export default class TetrominoGame extends React.Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
};

AppRegistry.registerComponent('TetrominoGame', () => TetrominoGame);
