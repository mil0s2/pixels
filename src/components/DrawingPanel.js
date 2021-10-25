import React, { useRef } from 'react';
import '../styles/drawingPanel.scss';
import Row from './Row';
import { exportComponentAsJPEG } from 'react-component-export-image';

const DrawingPanel = (props) => {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button
        className="button"
        onClick={() => exportComponentAsJPEG(panelRef)}
      >
        Export JPG
      </button>
    </div>
  );
};

export default DrawingPanel;
