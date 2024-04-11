import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
const [time, setTime ] = useState(' ');
const [date, setDate ] = useState(' ');

    function handleResponse(response){
setWeatherData({
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    description: response.data.weather[0].description,

});

let  date= new Date(response.data.dt * 1000);
let days =  [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday",
    "Saturday"
  ];
  
  let day = days[date.getDay()];
   let now = date.getDate();

let months =  [
    "January",
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July",
    "August",
    "September", 
    "October", 
    "November", 
    "December", 
  ];
  
  
  let month = months[date.getMonth()];
  let year = date.getFullYear();
let today = `${day}, ${now} ${month} ${year}`;
 
  let hours = date.getHours();
  if (hours < 10 ) {   
     hours = `0${hours}`;
   }
 let minutes = date.getMinutes();
 if (minutes < 10 ) {
   minutes = `0${minutes}`;
 }
 let time = `${hours}: ${minutes}`;

setDate(today);
 setTime(time);
setReady(true);
    }

    if (ready){
return(
    <div className="Weather-app">
        <header>
            <form className="search-form" id="search-form">
            
                <input type="search" placeholder="Enter a city...." required className="search-input" autoFocus="on" id="search-input"/>
             
                <input type="submit" value="Search" className="search-button" id="search-button"/>
                  
            </form>
        </header>

             <main>
          <div className="Weather-app-data">
                <div>
                    <h1 className="Weather-app-city">{weatherData.city}</h1>
                    <p className="Weather-app-details">
                        <span id="time">
                        {date}
                            </span>
                    <br/>
                    <span id="today-time">  {time}
                 </span>
                    <br/>
                    <span id="description" className="text-capitalize">{weatherData.description}</span>
                    <br/>
                </p>
                </div>
              

               <div className="Weather-app-temperature">
                <div id="icon">{weatherData.iconUrl}</div>
                <span id="temperature" className="temperature-value">{Math.round(weatherData.temperature)}</span> 
                <span className="temperature-degree">°C</span>
                 </div>
       </div>

           <div className="Current-conditions">
            <p>
                <span >Humidity: <strong id="humidity"> {weatherData.humidity}%</strong></span>
                <br/>
                <span >Wind: <strong id="wind-speed">{weatherData.wind}km/h</strong></span>
            </p>
           </div>       
           
          
        </main>      
    </div>
);
    }else{
        const apiKey = "62bc298785543e137bc6756e514eb1c3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading......."
    }
    

    

}