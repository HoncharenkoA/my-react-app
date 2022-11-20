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
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function clickedCity(event, cityName) {
    event.preventDefault();
    const apiKey = "da16704800751c14adceb19bcac00e36";
    let cityApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(cityApi).then(handleResponse);
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
  function showPosition(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "da16704800751c14adceb19bcac00e36";
    let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(geoUrl).then(handleResponse);
  }
  function fetchLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
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
        <div className="location">
          <a href="/" className="location" onClick={fetchLocation}>
            My location📍
          </a>
        </div>
        <WeatherInfo data={weatherData} />
        <hr />
        <div className="version-city">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="col-md-2 d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="js-city secondary-weather-name"
                  data-city-name="London"
                  onClick={(event) => {
                    clickedCity(event, "London");
                  }}
                >
                  London
                </a>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="js-city secondary-weather-name"
                  data-city-name="Tokyo"
                  onClick={(event) => {
                    clickedCity(event, "Tokyo");
                  }}
                >
                  Tokyo
                </a>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="js-city secondary-weather-name"
                  data-city-name="Sydney"
                  onClick={(event) => {
                    clickedCity(event, "Sydney");
                  }}
                >
                  Sydney
                </a>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="js-city secondary-weather-name"
                  data-city-name="Lviv"
                  onClick={(event) => {
                    clickedCity(event, "Lviv");
                  }}
                >
                  Lviv
                </a>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="js-city secondary-weather-name"
                  data-city-name="Paris"
                  onClick={(event) => {
                    clickedCity(event, "Paris");
                  }}
                >
                  Paris
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
