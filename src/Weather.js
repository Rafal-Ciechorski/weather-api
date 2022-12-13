import React from "react";

const Weather = (props) => {
    console.log(props);
    return(
        <li className="weatherList">
            <h2>Temperature: {props.weather.temperature}</h2>
            <h2>Humidity: {props.weather.humidity}</h2>
            <h2>Pressure: {props.weather.pressure}</h2>
            <h2>Wind speed: {props.weather.wind_speed}</h2>
        </li>
    )

}

export default Weather;