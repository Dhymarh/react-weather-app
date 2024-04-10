import React from "react";
import "./Weather.css";


export default function Weather() {
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
                    <h1 className="Weather-app-city" id="city">New York</h1>
                    <p className="Weather-app-details">
                        <span id="time">Wednesday, 10 April 2024</span>
                    <br/>
                    <span id="today-time">20:22</span>
                    <br/>
                    <span id="description">Mostly Cloudy</span>
                    <br/>
                </p>
                </div>
              

               <div className="Weather-app-temperature">
                <div id="icon"></div>
                <span id="temperature" className="temperature-value">10</span> 
                <span className="temperature-degree">°C</span>
                 </div>
       </div>

           <div className="Current-conditions">
            <p>
                <span >Humidity: <strong id="humidity">%</strong></span>
                <br/>
                <span >Wind: <strong id="wind-speed">km/h</strong></span>
            </p>
           </div>       
           
          
        </main>      
    </div>
);
}