// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=6F9Y8JM3UK28GTCE2G8XM4XW4&contentType=json`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
