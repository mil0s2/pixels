import React, { useState } from 'react';
import '../styles/pixel.scss';

const Pixel = (props) => {
  const { selectedColor, mouseDown } = props;

  const [pixelColor, setPixelColor] = useState('#fff');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const handleApplyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  };

  const handleOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const handleResetColor = () => {
    if (canChangeColor && !mouseDown) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };

  return (
    <div
      className="pixel"
      onClick={handleApplyColor}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleResetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
