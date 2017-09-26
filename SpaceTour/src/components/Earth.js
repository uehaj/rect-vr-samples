import React from 'react';
import { Sphere, asset } from 'react-vr';

const Earth = props => (
  <Sphere
    lit={true}
    widthSegments={20}
    heightSegments={12}
    texture={asset('2k_earth_daymap.jpg')}
    {...props}>
    {props.children}
  </Sphere>
);

export default Earth;
