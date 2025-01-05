import React, { useContext } from 'react'
import Cloudy from '../assets/Cloudy.png'
import vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector1.png'
import outline from '../assets/outline.png'
import outline2 from '../assets/outline2.png'
import outline1 from '../assets/outline1.png'
import { Weather } from '../App'
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
const Main = () => {

  const { weatherData} = useContext(Weather);
  const timestamp = weatherData?.dt * 1000; // Convert to milliseconds
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
// console.log(weatherData?.weather[0].icon)
  const iconCode = weatherData?.weather[0].icon; 
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <>
    <div className='flex lg:flex-row flex-col md:relative lg:items-end items-center space-y-5 '>
      <div className='text-white flex justify-center items-center gap-3 lg:max-h-[23vw] lg:ml-14'>
            <h1 className='font-semibold md:text-6xl text-4xl' >{Math.round(weatherData?.main.temp - 273.15)}°</h1>
            <div>
                <h1 className='text-center lg:text-4xl text-2xl font-semibold'>{weatherData?.name}</h1>
                <p>{`${formattedTime}-${formattedDate}`}</p>
            </div>
            <img src={iconUrl} alt="image" />
      </div>
      <div className="text-white space-y-5 backdrop-blur-lg p-8 w-full lg:w-[526px] h-screen lg:absolute flex flex-col -top-[132px] lg:pt-32 right-0">
        <p className='text-start text-xl font-semibold'>Weather Detail...</p>
        <div className='flex justify-between'>
        <h1>{weatherData?.weather[0].description.toUpperCase()}</h1>
        <h1>{`feels Like ${Math.round(weatherData?.main.feels_like - 273.15)}°`}</h1>
        </div>
        <div className='space-y-3'>
        <div className='flex justify-between text-gray-300'>
            <p>Temp max</p>
            <div className='flex gap-3 '>
            <p>{Math.round(weatherData?.main.temp_max - 273.15)}°</p>
            <img src={vector} alt="" />
            </div>
        </div>    
        <div className='flex justify-between text-gray-300'>
            <p>Temp min</p>
            <div className='flex gap-3 '>
            <p>{Math.round(weatherData?.main.temp_min - 273.15)}°</p>
            <img src={Vector1} alt="" />
            </div>
        </div>
        <div className='flex justify-between text-gray-300'>
            <p>Humadity</p>
            <div className='flex gap-3 '>
            <p>{weatherData?.main.humidity}%</p>
            <img src={outline} alt="" />
            </div>
        </div>    
        <div className='flex justify-between text-gray-300'>
            <p>Cloudy</p>
            <div className='flex gap-3 '>
            <p>{weatherData?.clouds.all}%</p>
            <img src={outline1} alt="" />
            </div>
        </div>
        <div className='flex justify-between text-gray-300'>
            <p>Wind</p>
            <div className='flex gap-3 '>
            <p>{weatherData?.wind.speed}km/h</p>
            <img src={outline2} alt="" />
            </div>
        </div>
        </div>
        <hr />
        <div className='space-y-2 text-gray-300 pb-1'>
            <h1>Contray code : {weatherData?.sys.country}</h1>
            <div className='flex justify-between '>
              <div className='flex gap-2 items-center '>
                 <p>Sun Rise</p>
                 <GiSunrise className='text-yellow-400 mb-3' size={30}/>

              </div>
             
             <p>{new Date(weatherData?.sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                <p>Sun Set</p>
                <GiSunset className='text-yellow-400' size={30}/>
              </div>
             <p>{new Date(weatherData?.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
