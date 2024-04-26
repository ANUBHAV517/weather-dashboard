// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Clock from 'react-live-clock';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay';
import './App.css';
import Forcast from './forcast';
function App() {
  const [weather, setWeather] = useState(null);
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=625a5c70f560b6efea1828dec9ecacfd`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div className="app">
        <Forcast icon="icon" weather="112" />

        {/* {weather && <WeatherDisplay weather={weather} />} */}
      </div>
    </>
  );
}

export default App;
