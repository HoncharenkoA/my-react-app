import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForeacast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19˚</span>
            <span className="WeatherForecast-temp-min">17˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
