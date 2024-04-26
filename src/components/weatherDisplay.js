// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>Weather Details</h2>
      <p>Temperature: {weather?.main.temp} °C</p>
      <p>Humidity: {weather?.main.humidity}%</p>
      <p>Wind Speed: {weather?.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
