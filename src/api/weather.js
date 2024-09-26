const getWeather = async (city) => {
  const apiKey = 'GJ2JS28YXH3KC6HF5VSYDEKB4';
  const urlUS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=${apiKey}&contentType=json`;
  const urlMetric = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;

  try {
    const [responseUS, responseMetric] = await Promise.all([
      fetch(urlUS, { mode: 'cors' }),
      fetch(urlMetric, { mode: 'cors' }),
    ]);

    const weatherDataUS = await responseUS.json();
    const weatherDataMetric = await responseMetric.json();
    return { us: weatherDataUS, metric: weatherDataMetric };
  } catch (error) {
    throw new Error(`Failed to Fetch Data ${error.message}`);
  }
};

export default getWeather;
