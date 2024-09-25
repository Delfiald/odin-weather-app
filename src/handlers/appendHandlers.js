import header from '../components/header';
import todayWeather from '../components/todayWeather';
import weeklyWeather from '../components/weeklyWeather';

export default () => {
  const main = document.createElement('main')
  const body = document.querySelector('body');
  body.appendChild(header());
  main.appendChild(todayWeather());
  main.appendChild(weeklyWeather());
  body.appendChild(main);
};
