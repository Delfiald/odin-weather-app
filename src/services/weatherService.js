import getWeather from '../api/weather';

class WeatherData {
  constructor (data){
    this.data = {...data};
  }

  getData() {
    return this.data;
  }
}

const showWeather = async (city) => {
  try {
    const data = await getWeather(city);
    const weather = new WeatherData(data);
    return weather.getData();
  } catch (error) {
    throw new Error(error)
  }
};

export default showWeather;
