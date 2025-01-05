import React from 'react'
import Hero from '../components/Hero'
import Bg from '../assets/bg-weather.png'
import Main from '../components/Main'
const Home = () => {
  return (
    <div className='w-screen min-h-screen' style={{ backgroundImage: `url(${Bg})`}}>
      <Hero/>
      <Main/>
    </div>
  )
}

export default Home
