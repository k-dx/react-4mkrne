import React, { useContext } from 'react';
import { SelectorsContext } from './SelectorsContext';

const ListItemComponent = (id) => {
  const { selectors, setSelectors } = useContext(SelectorsContext);
  return (
    <li
      onClick={() => {
        if (selectors[0] === null || selectors[1] !== null) {
          setSelectors([id, null]);
        } else {
          setSelectors([
            Math.min(selectors[0], id),
            Math.max(selectors[0], id),
          ]);
        }
      }}
      style={{
        color:
          selectors[0] !== null && selectors[0] <= id && id <= selectors[1]
            ? '#ff06b7'
            : 'black',
      }}
      key={id}
    >
      {id} item{' '}
    </li>
  );
};

export default ListItemComponent;
