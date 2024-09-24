import getWeather from '../api/weather';

const showWeather = async (city) => {
  try {
    const data = await getWeather(city);
    console.log(`${data}`);
  }catch(error) {
    console.error(error);
  }
}

export default showWeather;