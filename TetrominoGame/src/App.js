import React from 'react';
import { asset, Pano } from 'react-vr';

import * as Keys from './Keys';
import KeyHandler from './components/KeyHandler';
import PlayField from './components/PlayField';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyHandler captureKeys={[...Keys.ALL]}>
        <Pano source={asset('13905712293_4910bb2e3b_o.jpg')} />
        <PlayField />
      </KeyHandler>
    );
  }
}

export default App;
