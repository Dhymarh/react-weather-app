import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded && forecast) {
    return (
      <div className="Weather-forecast row">
        {forecast.slice(0, 5).map((day, index) => (
          <div className="col Weather-forecast-day" key={index}>
            <ForecastPreview data={day} icon={props.icon} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}