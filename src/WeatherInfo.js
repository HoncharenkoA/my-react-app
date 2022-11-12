import React from "react";
import FormatteDate from "./FormatteDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatheInfo">
      <div className="location">
        <a href="/">My location📍</a>
      </div>
      <div className="row">
        <div className="col-md-2">
          <img src={props.data.icon} alt="sun" />
          <ul className="description" id="temperature-description">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="description">
            <li>
              <FormatteDate date={props.data.date} />
            </li>
            <li className="currentTime"></li>
            <span className="temp">{props.data.temperature}</span>
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
}
