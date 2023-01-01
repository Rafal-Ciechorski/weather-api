import React, { Component } from 'react';
import {useState} from 'react';
import './App.css';
import Weather from './Weather.js';
import SubmitForm from './SubmitForm.js';


function App(props)
{
  const [weather, setWeather] = useState([]);
  const chooseWeather = (weather) => {
    setWeather(weather);
  }

     return(
      <React.Fragment>
        <section>
          <SubmitForm chooseWeather={chooseWeather}/>    
        </section>
        <section>
          <Weather weather = {weather}/>
        </section>
      </React.Fragment>
     );
}


export default App;
