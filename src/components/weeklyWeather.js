// eslint-disable-next-line import/no-extraneous-dependencies
import {isToday, format} from 'date-fns';

const createDay = () => {
  const dayWrapper = document.createElement('div')
  dayWrapper.className = 'day-wrapper'

  const dayName = document.createElement('div')
  dayName.className = 'day-name'

  const conditionIcons = document.createElement('div')
  conditionIcons.className = 'icons-wrapper'
  const icon1Wrapper = document.createElement('div')
  icon1Wrapper.className = 'icon-1'
  const icon1 = document.createElement('img')
  icon1Wrapper.appendChild(icon1)
  const icon2Wrapper = document.createElement('div')
  icon2Wrapper.className = 'icon-2'
  const icon2 = document.createElement('img')
  icon2Wrapper.appendChild(icon2)
  conditionIcons.appendChild(icon1Wrapper)
  conditionIcons.appendChild(icon2Wrapper)

  const tempWrapper = document.createElement('div')
  tempWrapper.className = 'temp-wrapper'
  const tempMax = document.createElement('div')
  tempMax.className = 'temp-max'
  const tempMin = document.createElement('div')
  tempMin.className = 'temp-min'
  tempWrapper.appendChild(tempMax)
  tempWrapper.appendChild(tempMin)
  
  dayWrapper.appendChild(dayName)
  dayWrapper.appendChild(conditionIcons)
  dayWrapper.appendChild(tempWrapper)

  return dayWrapper;
}

const createSection = () => {
  const section = document.createElement('section');
  section.className = 'weekly-weather';
  const weeklyWeather = document.createElement('div');
  weeklyWeather.className = 'weekly-wrapper';
  
  for(let i = 0; i < 7; i += 1) {
    weeklyWeather.appendChild(createDay());
  }

  section.appendChild(weeklyWeather);

  return section;
}

export const weeklyContent = (dayWrapper, weatherData, units) => {
  const dayName = dayWrapper.querySelector('.day-name');
  const icon1 = dayWrapper.querySelector('.icon-1 img');
  const icon2 = dayWrapper.querySelector('.icon-2 img');
  const tempMax = dayWrapper.querySelector('.temp-max')
  const tempMin = dayWrapper.querySelector('.temp-min')

  const getDay = weatherData.datetime;
  if(isToday(getDay)){
    dayName.textContent = 'Today';
  }else{
    dayName.textContent = format(getDay, 'EEEE');
  }

  icon1.src = ''
  icon2.src = ''
  tempMax.textContent = `${weatherData.tempmax}°${units['temp-unit']}`
  tempMin.textContent = `${weatherData.tempmin}°${units['temp-unit']}`
}

export default () => {
  const section = createSection();
  return section;
}