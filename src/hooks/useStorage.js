import { useState, useEffect } from 'react';

import { projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file, nick) => {
  const [url, setUrl] = useState(null);
  console.log(nick);
  useEffect(() => {
    // reference
    const collectionRef = projectFirestore.collection('images');

    const url = file;
    const createdAt = timestamp();
    collectionRef.add({ url, createdAt, nick });
    setUrl(url);
  }, [file]);

  return { url };
};

export default useStorage;
