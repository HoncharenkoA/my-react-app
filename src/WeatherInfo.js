import React from "react";
import FormatteDate from "./FormatteDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatheInfo">
      <div className="row">
        <div className="col-md-2">
          <WeatherIcon code={props.data.icon} />
          <div className="description-weather">
            <ul className="description">
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}Km/H</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <ul className="description">
            <li className="currentTime">
              {" "}
              <FormatteDate date={props.data.date} />
            </li>
            <WeatherUnits celsius={props.data.temperature} />
          </ul>
        </div>
        <div className="col-md-7">
          <div className="position d-flex justify-content-center"></div>
          <div className="weather-forecast">
            <WeatherForecast coordinates={props.data.coordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}
