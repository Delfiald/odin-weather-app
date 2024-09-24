const getWeather = async (city) => {
  const apiKey = 'GJ2JS28YXH3KC6HF5VSYDEKB4';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    console.log(response);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    throw new Error(`Failed to Fetch Data ${error.message}`);
  }
};

export default getWeather;
