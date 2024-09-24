import header, { headerContent } from '../components/header';
import todayWeather from '../components/todayWeather';

export default () => {
  const body = document.querySelector('body');
  body.appendChild(header());
  body.appendChild(todayWeather());

  headerContent('Jakarta');
};
