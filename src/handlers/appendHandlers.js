import header, { headerContent } from '../components/header';
import todayWeather, { overviewContent } from '../components/todayWeather';

export default () => {
  const body = document.querySelector('body');
  body.appendChild(header());
  body.appendChild(todayWeather());

  headerContent('Jakarta');
  overviewContent('21', '26 / 19', 'Partly Cloudy', '')
};
