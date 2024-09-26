import getWeather from '../api/weather';

class WeatherData {
  constructor(dataUs, dataMetric) {
    this.dataUs = { ...dataUs };
    this.dataMetric = { ...dataMetric };
  }

  getDataUS() {
    return this.dataUs;
  }

  getDataMetric() {
    return this.dataMetric;
  }
}

const showWeather = async (city) => {
  try {
    const data = await getWeather(city);
    const weather = new WeatherData(data.us, data.metric);
    return { us: weather.getDataUS(), metric: weather.getDataMetric() };
  } catch (error) {
    throw new Error(error);
  }
};

export default showWeather;
