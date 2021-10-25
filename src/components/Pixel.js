// import React, { useState } from 'react';
// import '../styles/pixel.scss';

// const Pixel = (props) => {
//   const { selectedColor } = props;

//   const [pixelColor, setPixelColor] = useState('#fff');
//   const [oldColor, setOldColor] = useState(pixelColor);
//   const [canChangeColor, setCanChangeColor] = useState(true);
//   const [isMouseDown, setIsMouseDown] = useState(false);

//   const handleMouseDown = () => {
//     setIsMouseDown(!isMouseDown);
//     setPixelColor(selectedColor);
//   };
//   console.log(isMouseDown);
//   if (isMouseDown) {
//     console.log('down');
//   }
//   const handleMouseEnter = () => {
//     if (isMouseDown) {
//       setPixelColor(selectedColor);
//     } else {
//       console.log('up');
//     }
//   };

//   return (
//     <div
//       className="pixel"
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseDown}
//       onMouseEnter={handleMouseEnter}
//       // onMouseLeave={handleResetColor}
//       style={{ backgroundColor: pixelColor }}
//     ></div>
//   );
// };

// export default Pixel;

import React, { useState } from 'react';
import '../styles/pixel.scss';

const Pixel = (props) => {
  const { selectedColor } = props;

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
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };

  return (
    <div
      className="pixel"
      onClick={handleApplyColor}
      onMouseEnter={handleOnHover}
      // onMouseLeave={handleResetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
