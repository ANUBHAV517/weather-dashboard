import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
function Forcast(props) {
  const [query, setQuery] = useState('delhi');
  const [weather, setWeather] = useState({});
  const [render, setRender] = useState(false);

  let api_key = '625a5c70f560b6efea1828dec9ecacfd';

  const search = async (city) => {
    if (query === '' && city == undefined) {
      toast.error('Kindly Enter City Name', {
        toastId: 'Kindly Enter City Name',
      });
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data?.cod == 200) {
      setWeather(data);
    } else {
      city == undefined &&
        toast.error('Kindly Enter Correct City Name.', {
          toastId: 'Kindly Enter Correct City Name.',
        });
    }
    setRender(true);
    setQuery('');
  };

  useEffect(() => {
    search('Delhi');
  }, []);

  return (
    <div className="forecast">
      {(weather?.main != undefined || render) && (
        <div className="today-weather">
          <h3>{weather?.weather?.[0]?.main}</h3>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search any city"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <div className="img-box">
              <img
                src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                onClick={() => {
                  search();
                }}
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
                    {Math.round(weather?.main?.temp - 273.15)}°c (
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
          ) : null}
        </div>
      )}
    </div>
  );
}
export default Forcast;
