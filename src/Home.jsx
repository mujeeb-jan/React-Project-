import React from 'react'
import HeroSection from './Components/HeroSection'

const Home = () => {

  const data ={
    name: "React Project",
    image: "./Images/hero.svg",
  };
  return (
    <div><HeroSection {...data} /></div>
  )
}

export default Home