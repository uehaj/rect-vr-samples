// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import * as OVRUI from 'ovrui';

function init(bundle, parent, options, fonts) {
  OVRUI.loadFont(
    ...fonts
  ).then((font) => {
    const vr = new VRInstance(bundle, 'World', parent, {
      // add custom fonts
      font,
      // Add custom options here
      ...options,
    });
    vr.render = function() {
      // Any custom behavior you want to perform on each frame goes here
    };
    // Begin the animation loop
    vr.start();
  });
}

window.ReactVR = {init};
