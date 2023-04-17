import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";
import WeatherCard from "./WeatherCard";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isSearchValid, setIsSearchValid] = useState(true);

  const handleSearch = async (query) => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setIsSearchValid(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setIsSearchValid(false);
    }
  };

  return (
    <div className="weather-app">
      <header>
        <h1>Weather Finder</h1>
      </header>
      <WeatherSearch onSearch={handleSearch} isSearchValid={isSearchValid} />
      {isSearchValid && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
