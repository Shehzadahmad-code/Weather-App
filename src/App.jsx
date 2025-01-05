import { createContext, useContext, useEffect, useState } from "react";
import Home from "./Pages/Home";

export const Weather = createContext();

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const fetchWeatherData = async (latitude, longitude, city = '') => {
    try {
      const apikey = "a446d9afa2b32869ab3ce22756c228d3";
      const url = city
        ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const getUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude); 
          },
          (error) => {
            console.error("Error fetching location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    
    if (!location) {
      getUserLocation(); 
    } else {
      fetchWeatherData(null, null, location); 
    }
  }, [location]); 
  return (
    <>
      <Weather.Provider value={{ weatherData, location, setLocation,fetchWeatherData }}>
        <Home />
      </Weather.Provider>
    </>
  );
}
