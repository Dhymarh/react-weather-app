import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

 useEffect(() => {
    setLoaded(false);
  }, [props.city]);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
}

function day(){
let date = new Date (forecast[0].time * 1000);
let day = date.getDay();

let days =  [
    "Sun",
    "Mon", 
    "Tue", 
    "Wed", 
    "Thur", 
    "Fri",
    "Sat"
  ];

  return days[day];

}


if (loaded) {   
console.log(forecast);
return(
         <div className="Weather-forecast">
     < div className="row">
         <div className="col Weather-forecast-day"> 
     <div className="Weather-forecast-date">{day()}</div>
           <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
           <div className="Weather-forecast-temperatures">
           <div className="Weather-forecast-temperature"> <strong>{Math.round(forecast[0].temperature.maximum)}º</strong> </div>
           <div className="Weather-forecast-temperature">{Math.round(forecast[0].temperature.minimum)}º</div>
           </div>
          </div>
          <div className="col Weather-forecast-day"> 
     <div className="Weather-forecast-date">{day()}</div>
           <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
           <div className="Weather-forecast-temperatures">
           <div className="Weather-forecast-temperature"> <strong>{Math.round(forecast[1].temperature.maximum)}º</strong> </div>
           <div className="Weather-forecast-temperature">{Math.round(forecast[1].temperature.minimum)}º</div>
           </div>
          </div>
          <div className="col Weather-forecast-day"> 
     <div className="Weather-forecast-date">{day()}</div>
           <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
           <div className="Weather-forecast-temperatures">
           <div className="Weather-forecast-temperature"> <strong>{Math.round(forecast[2].temperature.maximum)}º</strong> </div>
           <div className="Weather-forecast-temperature">{Math.round(forecast[2].temperature.minimum)}º</div>
           </div>
          </div>
          <div className="col Weather-forecast-day"> 
     <div className="Weather-forecast-date">{day()}</div>
           <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
           <div className="Weather-forecast-temperatures">
           <div className="Weather-forecast-temperature"> <strong>{Math.round(forecast[3].temperature.maximum)}º</strong> </div>
           <div className="Weather-forecast-temperature">{Math.round(forecast[3].temperature.minimum)}º</div>
           </div>
          </div>
          <div className="col Weather-forecast-day"> 
     <div className="Weather-forecast-date">{day()}</div>
           <img src= {props.icon} alt="Weather Icon" className="Weather-forecast-icon" />
           <div className="Weather-forecast-temperatures">
           <div className="Weather-forecast-temperature"> <strong>{Math.round(forecast[4].temperature.maximum)}º</strong> </div>
           <div className="Weather-forecast-temperature">{Math.round(forecast[4].temperature.minimum)}º</div>
           </div>
          </div>
     </div>
         </div>
     );

 } else{
 let apiKey = "da44c510d29bcd1d39ft328ob6fc208a";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
     
      axios.get(apiUrl).then(handleResponse);

return null;
 }

}

 
      