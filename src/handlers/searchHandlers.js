import showWeather from '../services/weatherService';
import inputValidity from '../utils/inputValidity';
import appendHandlers from './appendHandlers';
import loadContent from './loadContent';

const searchCity = async (city) => {
  appendHandlers.loading();

  try {
    const weatherData = await showWeather(city);
    appendHandlers.main();
    loadContent(weatherData);
  } catch (error) {
    appendHandlers.error(error);
  }
};

export default () => ({
  search: () => {
    const city = inputValidity();
    if (city) {
      searchCity(city);
    }
  },
  remove: () => {
    const input = document.getElementById('city');
    input.textContent = '';
    input.value = '';
  },
});
