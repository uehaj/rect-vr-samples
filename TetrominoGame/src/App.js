import React from 'react';
import { connect } from 'react-redux';
import { asset, Pano, Scene, Animated, Text } from 'react-vr';

import * as Actions from './actions';
import * as Keys from './Keys';
import KeyHandler from './components/KeyHandler';
import PlayField from './components/PlayField';

const AnimatedScene = Animated.createAnimatedComponent(Scene);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: new Animated.Value(0),
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
    if (!this.props.goAround && nextProps.goAround) {
      console.log('componentWillReceiveProps--------------');
      Animated.timing(
        this.state.direction,
        {toValue: 360, duration: 7000}
      ).start(() => {
        this.props.dispatch(Actions.setGoAround(false));
      });
    }
  }

  render() {
    const styles = {
      scene: {
        transform: [{
          rotateY: this.state.direction,
        }]
      },
    };

    return (
      <KeyHandler captureKeys={[...Keys.ALL]}>
        <Pano source={asset('13905712293_4910bb2e3b_o.jpg')} />
        <AnimatedScene style={styles.scene}/>
        <SpotLight />
        <Text style={{
                width: 10,
                borderRadius: 0.1,
                fontStyle: 'italic',
                fontSize: 1.5,
                fontWeight: 'bold',
                layoutOrigin: [0.5, 0.5],
                transform: [ {translate: [20, 15, -40]}],
              }}>
          SCORE {this.props.score}
        </Text>
        <PlayField />

      </KeyHandler>
    );
  }
}

export default connect(state => state, dispatch => ({ dispatch }))(App);
