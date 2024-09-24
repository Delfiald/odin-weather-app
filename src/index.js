import './css/style.css';

import appendHandler from './handlers/appendHandler';
import showWeather from './services/weatherService';

(() => {
  appendHandler();

  const searchIcon = document.querySelector('.search-wrapper label');
  searchIcon.addEventListener('click', () => {
    searchIcon.parentElement.classList.toggle('open');
  })
})()

// showWeather('jakarta');
