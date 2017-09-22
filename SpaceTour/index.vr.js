import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  PointLight,
  asset,
  View,
  Scene,
} from 'react-vr';

import Earth from './src/components/Earth';

export default class SpaceTour extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          intensity={2.0}
          style={{ transform: [{ translate: [1, 1, 10] }] }}
        />
        <AmbientLight intensity={0.1} />
        <Scene style={{ transform: [{ translate: [0, 0, 10] }] }} />
        <Earth />
      </View>
    );
  }
}

AppRegistry.registerComponent('SpaceTour', () => SpaceTour);
