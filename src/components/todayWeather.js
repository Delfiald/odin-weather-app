// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

const weatherOverview = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'overview-wrapper';

  const currentTemp = document.createElement('div');
  currentTemp.className = 'current-temp';
  const tempMaxMinWrapper = document.createElement('div');
  tempMaxMinWrapper.className = 'temp-max-min';

  const conditions = document.createElement('div');
  conditions.className = 'conditions';

  const icons = document.createElement('div');
  icons.className = 'conditions-icon';
  const img = document.createElement('img');
  icons.appendChild(img);

  wrapper.appendChild(currentTemp);
  wrapper.appendChild(tempMaxMinWrapper);
  wrapper.appendChild(conditions);
  wrapper.appendChild(icons);

  return wrapper;
};

const weatherDetails = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'details-wrapper';

  const details = {
    wind: { className: 'wind', icon: 'fas fa-wind', label: 'Wind' },
    humidity: {
      className: 'humidity',
      icon: 'fas fa-droplet',
      label: 'Humidity',
    },
    uvIndex: { className: 'uv-index', icon: 'fas fa-sun', label: 'UV Index' },
    cloudiness: {
      className: 'visibility',
      icon: 'fas fa-eye',
      label: 'Visibility',
    },
  };

  Object.keys(details).forEach((key) => {
    const content = document.createElement('div');
    content.className = details[key].className;
    const contentIcon = document.createElement('i');
    contentIcon.className = details[key].icon;
    const contentLabel = document.createElement('div');
    contentLabel.className = 'content-label';
    contentLabel.textContent = details[key].label;
    const contentText = document.createElement('div');
    contentText.className = 'content';
    content.appendChild(contentIcon);
    content.appendChild(contentLabel);
    content.appendChild(contentText);
    wrapper.appendChild(content);
  });

  const sun = document.createElement('div');
  sun.className = 'sun';
  const sunWrapper = document.createElement('div');
  const sunrise = document.createElement('div');
  sunrise.className = 'sunrise';
  const sunriseIcon = document.createElement('div');
  sunriseIcon.className = 'sunrise-icon';
  const sunriseText = document.createElement('div');
  sunriseText.className = 'sunrise-text';
  sunriseText.textContent = 'Sunrise';
  const sunriseValue = document.createElement('div');
  sunriseValue.className = 'sunrise-value';
  sunriseValue.textContent = '6.00am';
  const sunset = document.createElement('div');
  sunset.className = 'sunset';
  const sunsetIcon = document.createElement('div');
  sunsetIcon.className = 'sunset-icon';
  const sunsetText = document.createElement('div');
  sunsetText.className = 'sunset-text';
  sunsetText.textContent = 'Sunset';
  const sunsetValue = document.createElement('div');
  sunsetValue.className = 'sunset-value';
  sunsetValue.textContent = '8.00pm';
  sunrise.appendChild(sunriseIcon);
  sunrise.appendChild(sunriseText);
  sunrise.appendChild(sunriseValue);
  sunset.appendChild(sunsetIcon);
  sunset.appendChild(sunsetText);
  sunset.appendChild(sunsetValue);
  sunWrapper.appendChild(sunrise);
  sunWrapper.appendChild(sunset);
  sun.appendChild(sunWrapper);

  wrapper.appendChild(sun);

  return wrapper;
};

const createSection = () => {
  const section = document.createElement('section');
  section.className = 'today-weather';
  const overview = document.createElement('div');
  overview.className = 'weather-overview active';
  const details = document.createElement('div');
  details.className = 'weather-details';

  const overviewWrapper = weatherOverview();
  overview.appendChild(overviewWrapper);
  section.appendChild(overview);

  const detailsWrapper = weatherDetails();
  details.appendChild(detailsWrapper);
  section.appendChild(details);

  // Controls
  const arrowRight = document.createElement('i');
  arrowRight.className = 'fas fa-chevron-right next-btn show';
  const arrowLeft = document.createElement('i');
  arrowLeft.className = 'fas fa-chevron-left previous-btn';
  const indicatorWrapper = document.createElement('div');
  indicatorWrapper.className = 'indicator-wrapper';
  const indicatorContainer = document.createElement('div');
  indicatorContainer.className = 'indicator-container';
  const indicator1 = document.createElement('div');
  indicator1.className = 'indicator active';
  const indicator2 = document.createElement('div');
  indicator2.className = 'indicator';
  const indicatorActive = document.createElement('div');
  indicatorActive.className = 'indicator-active';
  indicatorContainer.appendChild(indicator1);
  indicatorContainer.appendChild(indicator2);
  indicatorContainer.appendChild(indicatorActive);
  indicatorWrapper.appendChild(indicatorContainer);
  section.appendChild(arrowLeft);
  section.appendChild(arrowRight);
  section.appendChild(indicatorWrapper);

  return section;
};

export const overviewContent = (currTemp, temp, condition, icon) => {
  const currentTemp = document.querySelector('.current-temp');
  const tempMaxMin = document.querySelector('.temp-max-min');
  const conditions = document.querySelector('.conditions');
  const conditionsIcon = document.querySelector('.conditions-icon img');

  currentTemp.textContent = currTemp;
  tempMaxMin.textContent = temp;
  conditions.textContent = condition;
  conditionsIcon.src = icon;
};

const uvIndexBackground = (index) => {
  let backgroundColor = 'purple';
  if (index <= 2) {
    backgroundColor = 'green';
  } else if (index <= 5) {
    backgroundColor = 'green';
  } else if (index <= 7) {
    backgroundColor = 'orange';
  } else if (index <= 10) {
    backgroundColor = 'red';
  }
  return backgroundColor;
};

const hourFormat = (timeString) => {
  const [hours, minutes] = timeString.split(':');

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  const formattedTime = format(date, 'hh:mm a');

  return formattedTime;
};

export const detailsContent = (
  windValue,
  humidityValue,
  uvValue,
  visibilityValue,
  sunriseValue,
  sunsetValue,
  windDir,
  units
) => {
  const wind = document.querySelector('.details-wrapper .wind .content');
  const humidity = document.querySelector(
    '.details-wrapper .humidity .content'
  );
  const uvIndex = document.querySelector('.details-wrapper .uv-index .content');
  const visibility = document.querySelector(
    '.details-wrapper .visibility .content'
  );
  const sunrise = document.querySelector(
    '.details-wrapper .sunrise .sunrise-value'
  );
  const sunset = document.querySelector(
    '.details-wrapper .sunset .sunset-value'
  );

  const formattedSunrise = hourFormat(sunriseValue);
  const formattedSunset = hourFormat(sunsetValue);

  wind.textContent = `${windValue} ${units['distance-unit']} / h`;
  humidity.textContent = `${humidityValue} %`;
  uvIndex.textContent = uvValue;
  visibility.textContent = `${visibilityValue} ${units['distance-unit']}`;
  sunrise.textContent = `${formattedSunrise}`;
  sunset.textContent = `${formattedSunset}`;

  const windDirection = document.createElement('i');
  windDirection.className = 'fas fa-arrow-up';
  windDirection.style.transform = `rotate(${windDir}deg)`;
  wind.appendChild(windDirection);

  const background = uvIndexBackground(uvValue);
  uvIndex.style.background = background;
};

export default () => {
  const section = createSection();
  return section;
};
