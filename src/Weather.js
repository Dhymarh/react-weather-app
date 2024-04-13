import React, {useState} from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { getBackground } from "./Background";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Weather.css";

const apiKey = "eac360db5fc86ft86450f3693e73o43f";


export default function Weather(props) {
    const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
const [time, setTime ] = useState(' ');
const [date, setDate ] = useState(' ');
const [city, setCity] = useState(props.defaultCity);
 const [backgroundImage, setBackgroundImage] = useState('');
 


    function handleResponse(response){
setWeatherData({
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    city: response.data.city,
   icon: response.data.condition.icon_url,
    description: response.data.condition.description,
});

let  date= new Date(response.data.time * 1000);
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
 setBackgroundImage(getBackground(response.data.condition.description, date.getHours()));
    }



function search(){
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse).catch(error => {
      console.error('Error fetching weather data:', error);
      setReady(false);
        });
}


   function handleSubmit(event){
    event.preventDefault();
    search();
   }
    
function updateCity(event){
    event.preventDefault();
setCity(event.target.value)
}


    if (ready){
return(
    <div className="Weather-app" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a city...." required className="search-input" autoFocus="on" onChange={updateCity}/>
             
                <input type="submit" value="Search" className="search-button" />
                  
            </form>
        </header>

             <main>
          <div className="Weather-app-data">
                <div>
                    <h1 className="Weather-app-city">{weatherData.city}</h1>
                    <p className="Weather-app-details">
                        <span >
                        {date}
                            </span>
                    <br/>
                    <span>  {time}
                 </span>
                    <br/>
                    <span>{weatherData.description}</span>
                    <br/>
                </p>
                </div>
              

               <div className="Weather-app-temperature">
                <div >
                    <img src= {weatherData.icon} alt="Weather Icon" className="temperature-icon" />
                </div>
                <Temperature celsius={weatherData.temperature} />
                 </div>
       </div>

           <div className="Current-conditions">
            <p>
                <span >Humidity: <strong> {weatherData.humidity}%</strong></span>
                <br/>
                <span >Wind: <strong>{weatherData.wind}km/h</strong></span>
            </p>
           </div>       
           
        </main>      
        <Forecast icon={weatherData.icon} city={city}/> 
    </div>
);
}else{
       search();
       
            return (
            <ThreeDots
            visible={true}
     height="80"
     width="80"
     color="#ffffff"
     radius="9"
     ariaLabel="three-dots-loading"
     wrapperStyle={{}}
     wrapperClass=""
     />);
     
    }
    

}