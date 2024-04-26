// SearchBar.js
import React, { useState } from 'react';
import './weatherApp.css';
import searchIcon from '../components/asset/search.png';
import humidity from '../components/asset/humidity.png';
import wind from '../components/asset/wind.png';
import cloudIcon from '../components/asset/cloud.png';
function SearchBar() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  let api_key = '625a5c70f560b6efea1828dec9ecacfd';
  const search = async () => {
    console.log('asd');
    if (city === '') {
      return false;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data, 'data asd');
    setWeather({
      humidity: data?.main?.humidity,
      wind: data?.wind?.speed,
      location: data?.name,
      temprature: data?.main?.temp,
    });
    setCity('');
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter City Here ...."
          value={city}
          onChange={(e) => {
            setCity(e?.target?.value);
          }}
        />
        <div className="search-icon" onClick={() => search()}>
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>
      {weather?.temprature && (
        <div>
          <div className="weather-image">
            <img src={cloudIcon} alt="cloudIcon" className="cityInput" />
          </div>
          <div className="weather-temp">{weather?.temprature}°C</div>
          <div className="weather-location">{weather?.location}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">{weather?.humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">{weather?.wind} Km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
