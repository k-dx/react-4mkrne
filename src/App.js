import React, { useState } from 'react';
import './style.css';

import { SelectorsContext } from './SelectorsContext';
import ColorList from './ColorList';

export default function App() {
  const [selectors, setSelectors] = useState([null, null]);

  return (
    <div>
      <SelectorsContext.Provider value={{ selectors, setSelectors }}>
        <ColorList />
        <button onClick={() => setSelectors([null, null])}>Reset colors</button>
        <pre>{JSON.stringify(selectors)}</pre>
      </SelectorsContext.Provider>
    </div>
  );
}
