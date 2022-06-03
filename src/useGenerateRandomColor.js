import { useState } from 'react';

const useGenerateRandomColor = (initColor = '000000') => {
  const [color, setColor] = useState(initColor);
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };
};
export default useGenerateRandomColor;
