import React, { useState } from "react";
import axios from "axios";

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
      icon: response.data.weather[0].icon,
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
            <h1 className="city-name">Kyiv</h1>
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
          <a href="/">My location📍</a>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img src=" " alt="sun" />
            <ul className="description" id="temperature-description">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="description">
              <li className="currentDay"></li>
              <li className="currentTime"></li>
              <span className="temp"></span>
              <span className="unit">
                <a href="/" className="active">
                  ˚C
                </a>{" "}
                |<a href="/">˚F</a>
              </span>
            </ul>
          </div>
          <div className="col-md-7">
            <div className="position d-flex justify-content-center"></div>
            <div className="weather-forecast"></div>
          </div>
          <hr />
          <div className="version-city">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="/"
                    className="js-city secondary-weather-name"
                    data-city-name="London"
                  >
                    London
                  </a>
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="/"
                    className="js-city secondary-weather-name"
                    data-city-name="Tokyo"
                  >
                    Tokyo
                  </a>
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="/"
                    className="js-city secondary-weather-name"
                    data-city-name="Sydney"
                  >
                    Sydney
                  </a>
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="/"
                    className="js-city secondary-weather-name"
                    data-city-name="Lviv"
                  >
                    Lviv
                  </a>
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="/"
                    className="js-city secondary-weather-name"
                    data-city-name="Paris"
                  >
                    Paris
                  </a>
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
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
