import { headerContent } from '../components/header';
import { overviewContent, detailsContent } from '../components/todayWeather';
import { weeklyContent } from '../components/weeklyWeather';

export default async (weatherData) => {
  const dayWrapperList = document.querySelectorAll('.day-wrapper');

  headerContent(weatherData.resolvedAddress);
  overviewContent(
    weatherData.days[0].temp,
    `${weatherData.days[0].tempmax}°F / ${weatherData.days[0].tempmin}°F`,
    weatherData.days[0].conditions,
    ''
  );

  detailsContent(
    weatherData.days[0].windspeed,
    weatherData.days[0].humidity,
    weatherData.days[0].uvindex,
    weatherData.days[0].visibility,
    weatherData.days[0].sunrise,
    weatherData.days[0].sunset,
    weatherData.days[0].winddir
  );

  for (let i = 0; i < dayWrapperList.length; i += 1) {
    weeklyContent(dayWrapperList[i], weatherData.days[i]);
  }
};
