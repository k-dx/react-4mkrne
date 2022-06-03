import React, { useState } from 'react';
import './style.css';

import { ColorContext } from './ColorContext';
import ColorList from './ColorList';

export default function App() {
  const COLORS = ['58355e', 'e03616', 'fff689', 'cfffb0', '5998c5'];

  const [colors, setColors] = useState(COLORS);

  return (
    <div>
      <ColorContext.Provider value={{ colors, setColors }}>
        <ColorList />
        <button onClick={() => setColors(colors.slice().reverse())}>
          Reverse colors
        </button>
        <button onClick={() => setColors(COLORS)}>Reset colors</button>
      </ColorContext.Provider>
    </div>
  );
}
