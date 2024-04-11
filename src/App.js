import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <Weather defaultCity="Nigeria"/>
<footer>This project was coded by {" "}
             <a href="https://github.com/Dhymarh" target="_blank" rel= "noreferrer" > Chidinma Odoh</a>, is {" "}
             <a href="https://github.com/Dhymarh/react-weather-app" target="_blank" rel= "noreferrer">open-sourced on Github</a> and <a href="https://my-react-weather-app-pi.vercel.app/" target="_blank" rel= "noreferrer">hosted on Vercel.</a>
        </footer>
    </div>
    </div>
  );
}

