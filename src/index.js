import './css/style.css';

import appendHandler from './handlers/appendHandlers';
import buttonHandlers from './handlers/buttonHandlers';
import showWeather from './services/weatherService';

(() => {
  appendHandler();

  const searchIcon = document.querySelector('.search-wrapper label');
  searchIcon.addEventListener('click', () => {
    searchIcon.parentElement.classList.toggle('open');
  })

  buttonHandlers();

  document.querySelector('.weather-overview').classList.add('active');
  document.querySelector('.indicator-wrapper > div').classList.add('active');
})()

// showWeather('jakarta');
