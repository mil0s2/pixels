import React, { useState } from 'react';
import '../styles/editor.scss';
import { CirclePicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setColor] = useState('#f44336');

  const heightAlert = 'Height must be set between 1 and 72';
  const widthAlert = 'Width must be set between 1 and 72';

  const handleButtonClick = () => {
    if (panelHeight < 1 || panelHeight > 72) {
      alert(heightAlert);
      return;
    }
    if (panelWidth < 1 || panelWidth > 72) {
      alert(widthAlert);
      return;
    }
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing');
  };

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              min="1"
              max="72"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              min="1"
              max="72"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button className="button" onClick={handleButtonClick}>
        {buttonText}
      </button>

      {hideOptions && (
        <CirclePicker
          color={selectedColor}
          onChangeComplete={handleChangeColor}
        />
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
};

export default Editor;
