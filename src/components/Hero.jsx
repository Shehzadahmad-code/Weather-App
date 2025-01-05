import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { Weather } from '../App';
const Hero = () => {
  const {weatherData,setLocation,fetchWeatherData} = useContext(Weather);
  
  // const changeSearch = (e) => {
  //   setInputValue(e.target.value); // Update the input value as the user types
  // };

  // const handleKeyDown = (e) => {
  //   console.dir(e.key)
  //   if (e.key === 'Enter' && inputValue.trim() !== '') {
  //     setLocation(inputValue.trim()); // Update global location when Enter is pressed
  //   }
  // };
  console.log(weatherData)
  const [she,setShe]=useState('')
  const getData = (e) => {
  setShe(e.target.value)
  }
  const handleData = () =>{
    setLocation(she);
    setShe('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleData();
    }
  };

  return (
    <div>
     <nav className='flex justify-between items-center p-8'>
        <img src={Logo} alt="logo" />
        <div className='relative z-10 '>
        <input type="text" value={she} onChange={getData}  onKeyDown={handleKeyDown} name="searchbar" id="searchbar" className='border-b-2 border-white focus:border-blue-500 focus:outline-none bg-transparent text-white lg:w-[450px]' placeholder='Search the location'/>
        <IoSearch className="text-white absolute top-0 right-0 cursor-pointer" size={20} onClick={handleData} />
        </div>
     </nav> 
    </div>
  )
}

export default Hero
