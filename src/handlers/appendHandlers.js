import header from '../components/header';
import loading from '../components/loading';
import todayWeather from '../components/todayWeather';
import weeklyWeather from '../components/weeklyWeather';
import error from '../components/error';

export default (() => {
  const main = document.createElement('main')
  const body = document.querySelector('body');
  
  const removeComponents = () => {
    const city = document.querySelector('header h1');
    if(city) {
      city.textContent = ''
    }
    main.textContent = '';
  }

  return {
    loadHeader: () => {
      body.appendChild(header());
    },
    main: () => {
      removeComponents();
      body.appendChild(main);
      main.appendChild(todayWeather());
      main.appendChild(weeklyWeather());
    },
    loading: () => {
      removeComponents();
      body.appendChild(main);
      main.appendChild(loading());
    },
    error: (errorCode) => {
      removeComponents();
      body.appendChild(main);
      main.appendChild(error(errorCode));
    }
  }
})();
