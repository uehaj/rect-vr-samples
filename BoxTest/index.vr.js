import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  PointLight,
  asset,
  Pano,
  Text,
  View,
  Box,
} from 'react-vr';

export default class BoxTest extends React.Component {
  render() {
    console.log(this.props);
    const MyBox = props => (
      <Box
        dimWidth={2}
        dimDepth={2}
        dimHeight={1}
        lit={true}
        style={{
          color: props.color,
            transform: [{ translate: [1, 1.1, 0] }, { rotateZ: 1 }],
        }}>
        {props.children}
      </Box>
    );

    return (
     <View
        wireframe={true}
        style={{  transform: [{ translate: [0, -3, -10] }] }}>
        <PointLight
          intensity={0.5}
          style={{ transform: [{ translate: [1, 1, 10] }] }}
        />
        <AmbientLight intensity={0.5} />
        <MyBox color={'red'}>
          <MyBox color={'green'}>
            <MyBox color={'blue'}>
              <MyBox color={'orange'} />
            </MyBox>
          </MyBox>
        </MyBox>
            <Text style={{ fontSize:10}}>A</Text>
            <Text >A</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('BoxTest', () => BoxTest);
