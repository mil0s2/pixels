import useStorage from '../hooks/useStorage';
import '../styles/progressBar.scss';

const UploadForm = ({ nick, url }) => {
  if (nick === '') {
    nick = 'guest';
  }

  useStorage(url, nick);

  return null;
};

export default UploadForm;
