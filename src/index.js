import './css/style.css';

import appendHandlers from './handlers/appendHandlers';
import buttonHandlers from './handlers/buttonHandlers';
import loadContent from './handlers/loadContent';
import showWeather from './services/weatherService';

(async () => {
  // Load Content
  try{
    appendHandlers.loading();
    const weatherData = await showWeather('Jakarta');
    appendHandlers.loadHeader();
    appendHandlers.main();
    loadContent(weatherData);

    const searchIcon = document.querySelector('.search-wrapper label');
    searchIcon.addEventListener('click', () => {
      searchIcon.parentElement.classList.toggle('open');
    })

    buttonHandlers();
  }catch(error){
    appendHandlers.error(error);
  }
})()
