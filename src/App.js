import React, { useState } from 'react';
import './style.css';

import useGenerateRandomColor from './useGenerateRandomColor';
import { ColorContext } from './ColorContext';
import { SelectorsContext } from './SelectorsContext';
import ColorList from './ColorList';

export default function App() {
  // const arr = ['this', 'that', 'apple'];
  // const arr2 = [{}, {}, {}];
  // const COLORS = ['58355e', 'e03616', 'fff689', 'cfffb0', '5998c5'];

  const [colors, setColors] = useState(
    Array.apply(null, Array(10)).map((x, i) => '000000')
  );

  const [selectors, setSelectors] = useState([null, null]);

  // [
  //   '58355e',
  //   'e03616',
  //   'fff689',
  //   'cfffb0',
  //   '5998c5',
  // ]

  return (
    <div>
      <SelectorsContext.Provider value={{ selectors, setSelectors }}>
        <ColorContext.Provider value={{ colors, setColors }}>
          <ColorList />
          <button onClick={() => setColors(colors.slice().reverse())}>
            Reverse colors
          </button>
          <button
            onClick={() =>
              setColors(Array.apply(null, Array(10)).map((x, i) => '000000'))
            }
          >
            Reset colors
          </button>
          <pre>{JSON.stringify(selectors)}</pre>
        </ColorContext.Provider>
      </SelectorsContext.Provider>
    </div>
  );
}
