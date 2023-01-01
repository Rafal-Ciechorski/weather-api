import React from "react";
import {useState} from 'react';



const SubmitForm = ({chooseWeather})=>{

    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherHandler(city);
      }

      const handleChange = (event) =>{
        event.preventDefault();
        setCity(event.target.value);
      }
  
    async function fetchWeatherHandler(city)
    {
        console.log(city);
    const response = await fetch(`http://localhost:8080/weather/${city}`);

      const data = await response.json();
        setWeather(data);
      }  
      
      chooseWeather(weather);
      return(
        <form onSubmit={handleSubmit}>
            <label>City name:
            <input type='text' value={city} onChange={handleChange}/>
            </label>    
            <button type="submit">Check weather</button>
        </form>
    )
    }

    
    

  

export default SubmitForm;