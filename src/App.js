import React, { Component } from 'react';
import {useState} from 'react';
import './App.css';
import Weather from './Weather.js';


function App()
{

  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherHandler()
  {
    setIsLoading(true);
    const response = await fetch(`http://localhost:8080/weather/szczecin`);
    const data = await response.json();
      setWeather(data);
      setIsLoading(false);
    }
    
  

     return(
      <React.Fragment>
        <section>
          <button onClick={fetchWeatherHandler}>Fetch weather data for Szczecin</button>
        </section>
        <section>
          <Weather weather = {weather}/>
        </section>
      </React.Fragment>
       
     );
}


export default App;
