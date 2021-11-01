import React from 'react';
import '../styles/row.scss';
import Pixel from './Pixel';

const Row = (props) => {
  const { width, selectedColor, mouseDown } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixel key={i} selectedColor={selectedColor} mouseDown={mouseDown} />
    );
  }
  return <div className="row">{pixels}</div>;
};

export default Row;
