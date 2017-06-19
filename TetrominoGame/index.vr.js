import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import App from './src/App';

export default class TetrominoGame extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('TetrominoGame', () => TetrominoGame);
