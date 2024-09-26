import { headerContent } from '../components/header';
import { overviewContent, detailsContent } from '../components/todayWeather';
import { weeklyContent } from '../components/weeklyWeather';
import { getCurrentUnit } from './unitHandlers';
import iconMap from '../utils/iconsLoader';
import backgroundHandlers from './backgroundHandlers';

const currentWeatherData = (() => {
  let currentData = null;

  return {
    setWeatherData: (data) => {
      currentData = data;
    },
    getWeatherData: () => currentData,
  }
})()

const contentUnits = (unit) => {
  if(unit === 'us'){
    return {'temp-unit': 'F', 'distance-unit': 'miles'}
  }
  return {'temp-unit': 'C', 'distance-unit': 'km'}
}

export default async (weatherData) => {
  const dayWrapperList = document.querySelectorAll('.day-wrapper');

  if(weatherData){
    currentWeatherData.setWeatherData(weatherData)
  }

  const unit = getCurrentUnit();
  const data = currentWeatherData.getWeatherData()[unit];

  const units = contentUnits(unit);

  headerContent(data.resolvedAddress);
  overviewContent(
    `${data.days[0].temp}°${units['temp-unit']}`,
    `${data.days[0].tempmax}°${units['temp-unit']} / ${data.days[0].tempmin}°${units['temp-unit']}`,
    data.days[0].conditions,
    iconMap[data.days[0].icon],
  );

  detailsContent(
    data.days[0].windspeed,
    data.days[0].humidity,
    data.days[0].uvindex,
    data.days[0].visibility,
    data.days[0].sunrise,
    data.days[0].sunset,
    data.days[0].winddir,
    units
  );

  for (let i = 0; i < dayWrapperList.length; i += 1) {
    weeklyContent(dayWrapperList[i], data.days[i], units);
  }

  backgroundHandlers(data.days[0].icon)
};
