import React from "react";


export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}º`;
  }

  return (
    <div >
      <div className="Weather-forecast-date">{day()}</div>
       <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
      <div className="Weather-forecast-temperatures">
        <span className="Weather-forecast-temperature"><strong>{maxTemperature()}</strong></span>
        <span className="Weather-forecast-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}