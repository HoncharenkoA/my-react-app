import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "da16704800751c14adceb19bcac00e36";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="mainBlock">
        <div className="row">
          <div className="col-md-6">
            <h1 className="city-name">{weatherData.city}</h1>
          </div>
          <form className="col-md-6 row" onSubmit={handleSubmit}>
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control shadow-sm border-0"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control btn btn-primary shadow-sm"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
