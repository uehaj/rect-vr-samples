import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import * as Actions from '../actions';

class KeyHandler extends Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.nativeEvent.inputEvent.type === 'KeyboardInputEvent') {
      const keyEvent = event.nativeEvent.inputEvent;
      if (keyEvent.eventType === 'keydown') {
        if (this.props.captureKeys.includes(keyEvent.keyCode)) {
          this.props.dispatch(Actions.uiKeyDown(keyEvent.keyCode));
        }
      }
    }
  }

  render() {
    return (
      <View onInput={this.handleKeyDown}>
        {this.props.children}
      </View>
    );
  }
}

export default connect(state => state, dispatch => ({ dispatch }))(KeyHandler);
