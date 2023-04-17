import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available, please search for a location.</p>;
  }

  const { name, main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { description } = weather[0];
  const { speed } = wind;

  const tempFahrenheit = (temp * 9) / 5 + 32;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>
        Temperature: {temp.toFixed(1)}°C / {tempFahrenheit.toFixed(1)}°F
      </p>
      <p>Description: {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
