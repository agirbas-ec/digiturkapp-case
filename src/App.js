import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./component/Weather.js";
function App() {
  const [current, setCurrent] = useState({
    temp_c: "",
    temp_f: "",
    text: "",
    icon: "",
  });
  const [location, setLocation] = useState({
    name: "",
    country: "",
    localtime: "",
  });

  const [forecast, setForecast] = useState({
    hourlyForecast: [],
  });

  // let hour = new Date(unixTimestamp * 1000).getHours();
  // let ampm = "AM";
  // if (hour === 0) hour = 12;
  // else if (hour > 12) {
  //   hour = hour - 12;
  //   ampm = "PM";
  // }

  useEffect(() => {
    const apiURL =
      "https://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1";
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setCurrent({
          temp: data.current.temp_c,
          temp_f: data.current.temp_f,
          icon: data.current.condition.icon,
          text: data.current.condition.text,
        });
        setLocation({
          name: data.location.name,
          country: data.location.country,
          localtime: data.location.localtime,
        });
        setForecast({
          hourlyForecast: data.forecast.forecastday,
        });
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="weather-box">
          <div>
            <p className="temperature__max">{current.text}</p> <br />
            <h4>
              {location.name}, {location.country}
            </h4>
          </div>

          {forecast.hourlyForecast.map((item) => (
            <Weather
              key={item.date}
              date={item.date}
              minTemp={item.day.mintemp_c}
              maxF={item.day.mintemp_f}
              coditn={item.day.condition.text}
              icn={item.day.condition.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
