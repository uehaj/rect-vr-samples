import React from 'react';
import { Sphere, PointLight, asset } from 'react-vr';

const Sun = props => (
  <Sphere
    widthSegments={40}
    heightSegments={24}
    texture={asset('2k_sun.jpg')}
    {...props}>
    <PointLight intensity={2.0} />
  </Sphere>
);

export default Sun;
