import React, { useState } from 'react';
import axios from 'axios';
import "../components/components.css";

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'd4cd5d39514cb44c0d203bc8cdb695ca';

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Error fetching weather data');
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeather();
    }
  };

  const getWeatherIcon = () => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const weatherMain = weatherData.weather[0].main.toLowerCase();
      switch (weatherMain) {
        case 'clear':
          return 'clear.png';
        case 'clouds':
          return 'cloud.png';
        case 'drizzle':
          return 'drizzle.png';
        case 'rain':
          return 'rain.png';
        case 'snow':
          return 'snow.png';
        default:
          return 'clear.png'; 
      }
    }
    return 'clear.png'; 
  };

  return (
    <>
    <div className='weatherapp'>
      <div className='weather'>
        <div className='search-bar'>
          <input 
            type='text' 
            placeholder='City Name' 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
          <img 
            src='Assets/search.png' 
            alt='search' 
            onClick={handleSearch} 
            style={{ cursor: 'pointer' }}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : weatherData ? (
          <>
            <img src={`Assets/${getWeatherIcon()}`} alt='weather' className='weather-icon'/>
            <p className='temperature'>{Math.round(weatherData.main.temp)}°C</p>
            <p className='location'>{weatherData.name}</p>
            <div className='weather-data'>
              <div className='col'>
                <img src='Assets/humidity.png' alt='humidity'/>
                <div>
                  <p>{weatherData.main.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className='col'>
                <img src='Assets/wind.png' alt='wind'/>
                <div>
                  <p>{weatherData.wind.speed} km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>No weather data</p>
        )}
      </div>
    </div>
    </>
  );
}

export default WeatherApp;
