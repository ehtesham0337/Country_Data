import axios from 'axios'
import React, { useEffect, useState } from 'react'

function WeatherData({city}) {
  const apiKey = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => setWeather(response.data))
  }, [city])

  
//  console.log(weather)
  return (
    
    weather.main ?
    <div className='flex flex-col items-center mt-3'>
        <p className='text-2xl text-zinc-200 underline'>Weather in {city}</p>
        
        <div style={{backgroundColor: 'lightblue'}} className='flex flex-col rounded-xl p-2 mt-3 mb-8'>
            <div className='flex items-center'>
            <h2>{weather.weather[0].description.toUpperCase()}</h2>
            <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <h3>Wind | {weather.wind.speed} m/s</h3>
            </div>
            <p className='text-xl text-center'>Temperature | {weather.main.temp} °C</p>
        </div>
        
    </div>
    :
    null
   

  )
}

export default WeatherData