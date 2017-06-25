import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Box, SpotLight, AmbientLight,
         PointLight,
       } from 'react-vr';

import KeyHandler from './components/KeyHandler';
import * as Keys from './Keys';

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
        <Text
          lit={true}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}>
          hello2
        </Text>
      </KeyHandler>
    );
  }
}

export default App;
