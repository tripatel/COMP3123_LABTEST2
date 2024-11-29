import axios from 'axios';

const API_KEY = '8cbade1325c5edb319c7d8a5a827605b'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=8cbade1325c5edb319c7d8a5a827605b' ;


export const getWeather = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};
