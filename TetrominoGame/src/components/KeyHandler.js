import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { asset, Pano, Text, View } from 'react-vr';
import * as Actions from '../actions';

class KeyHandler extends Component {

  constructor(props) {
    super(props);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup(event) {
    if (event.nativeEvent.inputEvent.type === 'KeyboardInputEvent') {
      const keyEvent = event.nativeEvent.inputEvent;
      if (keyEvent.eventType === 'keyup') {
        console.log(event.nativeEvent.inputEvent.keyCode);
        if (this.props.captureKeys.includes(keyEvent.keyCode)) {
          this.props.dispatch(Actions.uiKeyDown(keyEvent.keyCode));
        }
      }
    }
  }

  render() {
    return (
      <View onInput={this.handleKeyup}>
        {this.props.children}
      </View>
    );
  }
}

export default connect(state => state, dispatch => ({ dispatch }))(KeyHandler);
