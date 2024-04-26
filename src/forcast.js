import React, { useState, useEffect, Component } from 'react';
// import axios from 'axios';
// import apiKeys from './apiKeys';
// import ReactAnimatedWeather from 'react-animated-weather';

function Forcast(props) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState({});
  let api_key = '625a5c70f560b6efea1828dec9ecacfd';

  const search = async () => {
    if (query === '') {
      return false;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data, 'data asd');
    setWeather(data);
    setQuery('');
  };
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }

  const defaults = {
    color: 'white',
    size: 112,
    animate: true,
  };

  useEffect(() => {
    search('Delhi');
  }, []);

  return (
    <div className="forecast">
      <div className="forecast-icon">
        {/* <ReactAnimatedWeather
          icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        /> */}
      </div>
      <div className="today-weather">
        <h3>dawdawd</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            {' '}
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={search}
            />
          </div>
        </div>

        {weather?.main != undefined ? (
          <ul>
            <div>
              {' '}
              <li className="cityHead">
                <p>
                  {weather?.name}, {weather?.sys?.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}.png`}
                />
              </li>
              <li>
                Temperature{' '}
                <span className="temp">
                  {Math.round(weather?.main?.temp)}°c (
                  {weather?.weather?.[0]?.main})
                </span>
              </li>
              <li>
                Humidity{' '}
                <span className="temp">
                  {Math.round(weather?.main?.humidity)}%
                </span>
              </li>
              <li>
                Visibility{' '}
                <span className="temp">
                  {Math.round(weather?.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{' '}
                <span className="temp">
                  {Math.round(weather?.wind?.speed)} Km/h
                </span>
              </li>
            </div>
          </ul>
        ) : (
          <div>
            {error?.query} {error?.message}
          </div>
        )}
      </div>
    </div>
  );
}
export default Forcast;
