import React, {useState} from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {
    return (
        <span>
            <span className="temperature-value">{Math.round(props.celsius)}</span> 
                    <span className="temperature-degree">  
                        °C
                       {" "}
                        |  <a href="/" onClick={convertToFahrenheit}>
                        °F
                        </a> 
                        </span>
                        
    
        </span>
    );

}else{
    let fahrenheit = (props.celsius * 9/5) + 32;

    return(
        <span>
            <span className="temperature-value">{Math.round(fahrenheit)}</span> 
                    <span className="temperature-degree">
                       <a href="/" onClick={convertToCelsius}>
                        °C
                        </a> {" "}
                        | °F
                        </span>
                        
    
        </span>
    );
}
}