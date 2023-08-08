import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    
    const API_KEY = "ab01af658325a296b9812dbdbe8f5431"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='bg-cyan-600 min-h-screen text-white font-Lato flex justify-center items-center px-4'>
      <Weather weatherInfo={weatherInfo} />        
    </main>
  )
}

export default App
