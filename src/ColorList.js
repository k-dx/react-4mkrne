import React, { useContext } from 'react';
import useGenerateRandomColor from './useGenerateRandomColor';
import { ColorContext } from './ColorContext';
import { SelectorsContext } from './SelectorsContext';
import ListItemComponent from './ListItemComponent';

const ColorList = () => {
  const { colors, setColors } = useContext(ColorContext);

  return (
    <ul>{colors.map((e, i) => ListItemComponent(i))}</ul>

    // <ul>{[...Array(10)].map((e, i) => ListItemComponent(i))}</ul>
  );
};

export default ColorList;
