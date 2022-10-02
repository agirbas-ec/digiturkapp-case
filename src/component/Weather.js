import React from "react";
import "../component/weather.css";

function weather({ date, coditn, icn, minTemp, maxF }) {
  return (
    <div className="weatherapp">
      <span>{date}</span>
      <img className="Forecast__weather-icon" src={icn} />

      <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(minTemp)}C<sup className="temperature__symbol">°</sup>
        </span>
        <span className="temperature__min">
          {Math.round(maxF)}F<sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
}

export default weather;
