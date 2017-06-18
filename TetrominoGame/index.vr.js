import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import TetrominoGame from './src/TetrominoGame';

export default class App extends React.Component {
  render() {
    return <TetrominoGame />;
  }
}

AppRegistry.registerComponent('App', () => App);
