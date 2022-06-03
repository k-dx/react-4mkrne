import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const ListItemComponent = (id) => {
  const { colors, setColors } = useContext(ColorContext);

  return (
    <li
      onClick={() => {
        setColors(colors.map((e, i) => (i == id ? 'ff06b7' : e)));
      }}
      style={{ color: '#' + colors[id] }}
      key={id}
    >
      {id} item{' '}
    </li>
  );
};

export default ListItemComponent;
