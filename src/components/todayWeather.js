const weatherOverview = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'overview-wrapper';

  const currentTemp = document.createElement('div');
  currentTemp.className = 'current-temp';
  const tempMaxMinWrapper = document.createElement('div')
  tempMaxMinWrapper.className = 'temp-max-min'

  const conditions = document.createElement('div');
  conditions.className = 'conditions';

  const icons = document.createElement('div');
  icons.className = 'conditions-icon';
  const img = document.createElement('img');
  icons.appendChild(img);

  wrapper.appendChild(currentTemp)
  wrapper.appendChild(tempMaxMinWrapper)
  wrapper.appendChild(conditions)
  wrapper.appendChild(icons)

  return wrapper;
}

const weatherDetails = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'details-wrapper';

  const details = {
    wind: {className: 'wind', icon: 'fas fa-wind'},
    humidity: {className: 'humidity', icon: 'fas fa-droplet'},
    uvIndex: {className: 'uv-index', icon: 'fas fa-sun'},
    cloudiness: {className: 'cloudiness', icon: 'fas fa-cloud'}
  }

  Object.keys(details).forEach((key) => {
    const content = document.createElement('div');
    content.className = details[key].className;
    const contentIcon = document.createElement('i');
    contentIcon.className = details[key].icon
    const contentText = document.createElement('div');
    contentText.className = 'content-text'
    contentText.textContent = details[key].className
    content.appendChild(contentIcon)
    content.appendChild(contentText)
    wrapper.appendChild(content);
  })

  const sun = document.createElement('div');
  sun.className = 'sun';
  const sunWrapper = document.createElement('div');
  const sunrise = document.createElement('div');
  sunrise.className = 'sunrise'
  const sunriseIcon = document.createElement('div');
  sunriseIcon.className = 'sunrise-icon';
  const sunriseText = document.createElement('div');
  sunriseText.className = 'sunrise-text';
  sunriseText.textContent = 'Sunrise'
  const sunriseValue = document.createElement('div');
  sunriseValue.className = 'sunrise-value';
  sunriseValue.textContent = '6.00am'
  const sunset = document.createElement('div');
  sunset.className = 'sunset'
  const sunsetIcon = document.createElement('div');
  sunsetIcon.className = 'sunset-icon';
  const sunsetText = document.createElement('div');
  sunsetText.className = 'sunset-text';
  sunsetText.textContent = 'Sunset'
  const sunsetValue = document.createElement('div');
  sunsetValue.className = 'sunset-value';
  sunsetValue.textContent = '8.00pm'
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
}

const createSection = () => {
  const section = document.createElement('section');
  section.className = 'today-weather';
  const overview = document.createElement('div');
  overview.className = 'weather-overview'
  const details = document.createElement('div');
  details.className = 'weather-details'

  const overviewWrapper = weatherOverview();
  overview.appendChild(overviewWrapper);
  section.appendChild(overview)

  const detailsWrapper = weatherDetails();
  details.appendChild(detailsWrapper);
  section.appendChild(details)

  // Controls
  const arrowRight = document.createElement('i');
  arrowRight.className = 'fas fa-chevron-right next-btn'
  const arrowLeft = document.createElement('i');
  arrowLeft.className = 'fas fa-chevron-left previous-btn'
  const indicatorWrapper = document.createElement('div');
  indicatorWrapper.className = 'indicator-wrapper';
  const indicator1 = document.createElement('div');
  const indicator2 = document.createElement('div');
  indicatorWrapper.appendChild(indicator1)
  indicatorWrapper.appendChild(indicator2)
  section.appendChild(arrowLeft)
  section.appendChild(arrowRight)
  section.appendChild(indicatorWrapper)

  return section
}

export const overviewContent = () => {

}

export default () => {
  const section = createSection();
  return section;
}