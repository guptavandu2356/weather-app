// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = 'dd4204769cee43a70a9828642ab4271f'; // Your OpenWeather API key

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError(null); // Reset error state before fetching
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(response.data); // Update state with the fetched data
    } catch (error) {
      console.error(error);
      setError('City not found'); // Set error message for UI
      setWeatherData(null); // Clear any previous data
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onFetchWeather={fetchWeatherData} />
      <WeatherInfo weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
};

export default App;
