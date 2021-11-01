import { useState } from 'react';
import '../styles/App.scss';
import Editor from './Editor';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <img src="" alt="" />
      <Editor />
      <h3>Your Art</h3>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      )}
    </div>
  );
}

export default App;
