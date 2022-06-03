import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import ListItemComponent from './ListItemComponent';

const ColorList = () => {
  const { colors, setColors } = useContext(ColorContext);

  return (
    <ul>{colors.map((e, i) => ListItemComponent(i))}</ul>

    // <ul>{[...Array(10)].map((e, i) => ListItemComponent(i))}</ul>
  );
};

export default ColorList;
