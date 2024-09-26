import { togglerContent } from '../components/unitToggler';
import loadContent from './loadContent';

let currentUnit = 'us';

export default () => {
  const togglerWrapper = document.querySelector('.toggler-wrapper');

  togglerWrapper.classList.toggle('metric');

  if (togglerWrapper.classList.contains('metric')) {
    currentUnit = 'metric';
    togglerContent('SI', 'C / km');
  } else {
    currentUnit = 'us';
    togglerContent('US', 'F / miles');
  }

  loadContent();
};

export const getCurrentUnit = () => currentUnit;
