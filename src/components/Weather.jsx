import React, { useState } from 'react'

const Weather = ({weatherInfo}) => {
  const [isCelsius, setIsCelsius] = useState(true)  

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1)
  }

  const kelvinToFarenheit = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
  }

  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius) 
  }
   
  const resultTempConversion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFarenheit(weatherInfo?.main.temp)

  return (
    <section className='text-center'>
        <h2>{weatherInfo?.name}</h2>

        <section className='grid gap-4 sm:grid-cols-[auto_auto]'>
            {/* seccion superior*/}
                <section className='bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center'>
                    <h4 className='col-span-2'>{weatherInfo?.weather[0].description}</h4>
                    <span className='text-5xl'>{resultTempConversion}°{isCelsius ? "C" : "F"}</span>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>            
                </section>

            {/* seccion inferior*/}
                <section className='bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 sm:grid-cols-1'>
                    <article className='flex gap-2 items-center'>
                        <div className='w-[18px]'>
                            <img src={"/images/wind.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}m/s</span>
                    </article>
                    <article className='flex gap-2 items-center'>
                        <div className='w-[18px]'>
                            <img src={"/images/humidity.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}%</span>
                    </article>
                    <article className='flex gap-2 items-center'>
                        <div className='w-[18px]'>
                            <img src={"/images/pressure.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure}hPa</span>
                    </article>
                </section>
        </section>

        <button onClick={handleChangeUnitTemp} className='mt-4 bg-white text-black'>C°/F°</button>
    </section>
  )
}

export default Weather