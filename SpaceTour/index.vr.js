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
import Sun from './src/components/Sun';
import Moon from './src/components/Moon';

export default class SpaceTour extends React.Component {
  render() {
    return (
      <View>
        <Scene style={{ transform: [{ translate: [-5, 0, 10] }] }} />
        <Earth
          style={{ transform: [{ translate: [-8, 0, 0] }, { scaleX: 0.5 }] }}>
          <Moon
            style={{ transform: [{ translate: [-10, 0, 0] }, { scale: 0.5 }] }}
          />
        </Earth>
        <Sun style={{ transform: [{ translate: [0, 0, 0] }, { scale: 9 }] }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('SpaceTour', () => SpaceTour);
