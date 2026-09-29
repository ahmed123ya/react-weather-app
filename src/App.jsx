import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
function App() {
const [city, setCity] = useState('')
const [weatherData, setWeatherData] = useState(null)
const getWeatherData = async () => {
try {
  const apiKey = '620fcbb0770d4c2cc412be3c845cb784'; 
const data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
console.log(data.data);
setWeatherData(data.data)
} catch (error) {
  alert(error)
}

}
// useEffect(() => {
//   getWeatherData();
// }, []);
  return (
    <>
    <div className="weather-container">

  <h1>Weather App</h1>

  <div className="search-box">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
    />

    <button onClick={getWeatherData}>
      Get Weather
    </button>
  </div>

  {weatherData && (
    <div className="weather-card">

      <h2>{weatherData.name}</h2>

      <p className="description">
        {weatherData.weather[0].description}
      </p>

      <div className="temperature">
        {weatherData.main.temp}°C
      </div>

      <div className="weather-info">

        <div className="info-box">
          <span>Feels Like</span>
          <strong>{weatherData.main.feels_like}°C</strong>
        </div>

        <div className="info-box">
          <span>Humidity</span>
          <strong>{weatherData.main.humidity}%</strong>
        </div>

        <div className="info-box">
          <span>Wind</span>
          <strong>{weatherData.wind.speed} m/s</strong>
        </div>

      </div>

    </div>
  )}

</div>
    </>
  )
}

export default App
