import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import { SelectorsContext } from './SelectorsContext';

const ListItemComponent = (id, initColor) => {
  // const { color, generateColor } = useGenerateRandomColor(initColor);

  const { colors, setColors } = useContext(ColorContext);
  const { selectors, setSelectors } = useContext(SelectorsContext);

  // I _CANNOT_ use setState inside functions, right?
  // const changeColor = (val, set) => {
  //   console.log(val);
  //   let newColors = ['58355e', 'e03616', 'fff689', 'cfffb0', '5998c5'];
  //   newColors[id] = 'FF06B7';
  //   set(newColors);
  // };

  return (
    <li
      // onClick={() => {
      //   setColors(colors.map((e, i) => (i == id ? 'ff06b7' : e)));
      // }}
      // style={{ color: '#' + colors[id] }}

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
      style={{ color: selectors[0] <= id && id <= selectors[1] ? '#ff06b7' : 'black' }}
      key={id}
    >
      {id} item{' '}
    </li>
  );
};

export default ListItemComponent;
