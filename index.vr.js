import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Animated,
} from 'react-vr';

export default class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  bounce() {
    this.state.bounceValue.setValue(0);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 360,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
  componentDidMount() {
    this.bounce();
  }
  handleEnter(ev) {
    console.log(ev.target);
    this.bounce();
  }
  render() {
    return (
      <View>
        <Pano source={asset('02-office.jpg')}/>
        <Animated.Text
          onEnter={this.handleEnter.bind(this)}
          style={{
            backgroundColor: '#aa9988',
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
              {rotateZ: this.state.bounceValue},
              {rotateY: 30},
              {scale: 1.0},
            ],
          }}>
          NTT テクノクロス
        </Animated.Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('World', () => World);
