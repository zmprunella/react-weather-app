import React, { useState } from "react";
import "./WeatherSearch.css";

const WeatherSearch = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter city or zip code"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherSearch;
