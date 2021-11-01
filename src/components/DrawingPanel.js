import React, { useCallback, useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import { exportComponentAsJPEG } from 'react-component-export-image';

import '../styles/drawingPanel.scss';
import Row from './Row';
import UploadForm from './UploadForm';

const DrawingPanel = (props) => {
  const { width, height, selectedColor } = props;
  const [mouseDown, setMouseDown] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState(null);
  const nameRef = useRef();
  const panelRef = useRef();

  let rows = [];

  function handleMouseToggle(e) {
    if (e.target !== nameRef.current) {
      e.preventDefault();
      setMouseDown(!mouseDown);
    }
  }

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        selectedColor={selectedColor}
        mouseDown={mouseDown}
      />
    );
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = useCallback(async () => {
    if (panelRef.current === null) {
      return;
    }
    const url = await toJpeg(panelRef.current, { cacheBust: true });
    setUrl(url);
  }, [panelRef]);

  return (
    <>
      <div
        id="drawingPanel"
        onMouseDown={handleMouseToggle}
        onMouseUp={handleMouseToggle}
      >
        <div id="pixels" ref={panelRef}>
          {rows}
        </div>
        <div className="form">
          <button
            className="button"
            onClick={() => exportComponentAsJPEG(panelRef)}
          >
            Export JPG
          </button>

          {url && <UploadForm nick={name} url={url} />}
          <input
            ref={nameRef}
            type="text"
            name="name"
            value={name}
            className="nameInput"
            placeholder="Your Name"
            onChange={handleChangeName}
          />

          <button className="buttonSubmit" onClick={handleSubmit}>
            Submit your art
          </button>
        </div>
      </div>
    </>
  );
};

export default DrawingPanel;
