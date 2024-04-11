import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});

    function handleResponse(response){
        console.log(response.data);
setWeatherData({
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    description:response.data.weather[0].description,
    date: "Thursday, 11 April 2024",
   
});

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
                        <span id="time">{weatherData.date}</span>
                    <br/>
                    <span id="today-time">20:22</span>
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