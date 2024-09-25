import './css/style.css';

import appendHandler from './handlers/appendHandlers';
import buttonHandlers from './handlers/buttonHandlers';
import loadContent from './handlers/loadContent';
import showWeather from './services/weatherService';

(() => {
  appendHandler();

  const searchIcon = document.querySelector('.search-wrapper label');
  searchIcon.addEventListener('click', () => {
    searchIcon.parentElement.classList.toggle('open');
  })

  buttonHandlers();

  // Load Content
  loadContent();
})()

// showWeather('jakarta');
