import { headerContent } from '../components/header';
import { overviewContent, detailsContent } from '../components/todayWeather';
import { weeklyContent } from '../components/weeklyWeather';

export default () => {
  const dayWrapperList = document.querySelectorAll('.day-wrapper');
  const data = {
    city: 'Jakarta',
    temp: `21°`,
    tempMax: `26°`,
    tempMin: `19°`,
    condition: `Partly Cloudy`,
    icon: ``,
    wind: '8km / h',
    windDir: 45,
    humidity: '90',
    'uv-index': 2,
    visibility: '20 km',
    sunrise: '6.00 am',
    sunset: '6.20 pm'
  }
  
  headerContent(data.city);
  overviewContent(data.temp, `${data.tempMax}/${data.tempMin}`, data.condition, data.icon)

  detailsContent(data.wind, data.humidity, data['uv-index'], data.visibility, data.sunrise, data.sunset)

  for(let i = 0; i < dayWrapperList.length; i += 1) {
    weeklyContent(dayWrapperList[i]);
  }
}