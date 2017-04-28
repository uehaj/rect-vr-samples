import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class World extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('02-office.jpg')}/>
        <Text
          style={{
            backgroundColor: '#bbaa99',
            color: 'black',
            fontSize: 0.4,
            fontWeight: '700',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.0,
            paddingRight: 0.0,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [-3, 0.2, -6]},
              {rotateY: 30}
            ],
          }}>
          NTTテクノクロス
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('World', () => World);
