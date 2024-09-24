import header, { headerContent } from '../components/header';

export default () => {
  const body = document.querySelector('body');
  body.appendChild(header());

  headerContent('Jakarta');
};
