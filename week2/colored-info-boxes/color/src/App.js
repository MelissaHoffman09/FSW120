import React from 'react';
import ColorBox from './ColorBox';
import './App.css';

function App() {
  return (
    <div>
      <ColorBox backgroundColor='yellow'
      box={{title: "Color 1", subtitle: "I am Yellow", info: "I am primary color" }}
      />
      <ColorBox backgroundColor='red'
      box={{title: "Color 2", subtitle: "I am Red", info: "I am primary color" }}
      />
      <ColorBox backgroundColor='blue'
      box={{title: "Color 3", subtitle: "I am Blue", info: "I am primary color" }}
      />
      <ColorBox backgroundColor='green'
      box={{title: "Color 4", subtitle: "I am Green", info: "I am secondary color" }}
      />
      <ColorBox backgroundColor='orange'
      box={{title: "Color 5", subtitle: "I am Orange", info: "I am secondary color" }}
      />
      <ColorBox backgroundColor='purple'
      box={{title: "Color 6", subtitle: "I am Purple", info: "I am secondary color" }}
      />
      <ColorBox backgroundColor='pink'
      box={{title: "Color 7", subtitle: "I am Pink", info: "I am secondary color" }}
      />
      <ColorBox backgroundColor='grey'
      box={{title: "Color 8", subtitle: "I am Grey", info: "I am secondary color" }}
      />
      <ColorBox backgroundColor='teal'
      box={{title: "Color 9", subtitle: "I am Brown", info: "I am tertiary color" }}
      />
      <ColorBox backgroundColor='maroon'
      box={{title: "Color 1", subtitle: "I am Maroon", info: "I am tertiary color" }}
      />
    </div>
  );
}

export default App;
