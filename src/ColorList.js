import React, { useContext } from 'react';
import ListItemComponent from './ListItemComponent';

const ColorList = () => {
  return (
    // <ul>{colors.map((e, i) => ListItemComponent(i))}</ul>

    <ul>{[...Array(10)].map((e, i) => ListItemComponent(i))}</ul>
  );
};

export default ColorList;
