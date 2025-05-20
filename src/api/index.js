import axios from 'axios';


export async function getWeatherData (
    endpoint,
    place_id,
    measurementSystem
) {


const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    language: 'en',
    units: measurementSystem,
  },
  headers: {
    'x-rapidapi-key': '1de4a7878cmsh808568b3c0e4379p1da997jsnb556ead5afd9',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}

}