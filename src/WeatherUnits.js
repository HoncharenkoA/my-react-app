import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function changeFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function changeCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ˚C |
          <a href="/" onClick={changeFahrenheit}>
            {" "}
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherUnits">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={changeCelsius}>
            ˚C
          </a>{" "}
          | ˚F
        </span>
      </div>
    );
  }
}
