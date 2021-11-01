import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div onClick={handleClick} className="backdrop">
      <img src={selectedImg} alt="Full-size pic" />
    </div>
  );
};

export default Modal;
