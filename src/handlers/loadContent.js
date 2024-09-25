import { headerContent } from '../components/header';
import { overviewContent, detailsContent } from '../components/todayWeather';
import { weeklyContent } from '../components/weeklyWeather';
import { getCurrentUnit } from './unitHandlers';

const currentWeatherData = (() => {
  let currentData = null;

  return {
    setWeatherData: (data) => {
      currentData = data;
    },
    getWeatherData: () => currentData,
  }
})()

export default async (weatherData) => {
  const dayWrapperList = document.querySelectorAll('.day-wrapper');

  if(weatherData){
    currentWeatherData.setWeatherData(weatherData)
  }

  const unit = getCurrentUnit();
  const data = currentWeatherData.getWeatherData()[unit];

  headerContent(data.resolvedAddress);
  overviewContent(
    data.days[0].temp,
    `${data.days[0].tempmax}°F / ${data.days[0].tempmin}°F`,
    data.days[0].conditions,
    ''
  );

  detailsContent(
    data.days[0].windspeed,
    data.days[0].humidity,
    data.days[0].uvindex,
    data.days[0].visibility,
    data.days[0].sunrise,
    data.days[0].sunset,
    data.days[0].winddir
  );

  for (let i = 0; i < dayWrapperList.length; i += 1) {
    weeklyContent(dayWrapperList[i], data.days[i]);
  }
};
