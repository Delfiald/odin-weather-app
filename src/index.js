import './css/style.css';

import appendHandlers from './handlers/appendHandlers';
import buttonHandlers from './handlers/buttonHandlers';
import loadContent from './handlers/loadContent';
import showWeather from './services/weatherService';

(async () => {
  // Load Content
  try {
    appendHandlers.loading();
    const weatherData = await showWeather('Jakarta');
    appendHandlers.loadHeader();
    appendHandlers.main();
    loadContent(weatherData);

    buttonHandlers();
  } catch (error) {
    appendHandlers.error(error);
  }
})();
