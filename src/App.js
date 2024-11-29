import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { getWeather } from './weatherService';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);

    const handleSearch = async (city) => {
        const data = await getWeather(city);
        if (data) {
            setWeather(data); // Update the weather state with API data
        } else {
            setWeather(null); // In case of an error, set weather to null
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            <WeatherDisplay weather={weather} />
        </div>
    );
};

export default App;
