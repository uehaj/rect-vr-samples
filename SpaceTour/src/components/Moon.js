import React from 'react';
import { Sphere, asset } from 'react-vr';

const Moon = props => (
  <Sphere
    lit={true}
    widthSegments={20}
    heightSegments={12}
    texture={asset('2k_moon.jpg')}
    {...props}
  />
);

export default Moon;
