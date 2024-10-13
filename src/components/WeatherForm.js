// src/components/WeatherForm.js

import React, { useState } from 'react';

const WeatherForm = ({ onFetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onFetchWeather(city); // Call the passed function with the city name
      setCity(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
