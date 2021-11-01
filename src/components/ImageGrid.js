import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <p>{doc.nick}</p>
            <LazyLoadImage effect="blur" src={doc.url} alt="Piece of Art" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
