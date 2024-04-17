import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {

  const data = {
    name : "React Project by M_Tech",
    image : "./Images/about1.svg"
  }
  return (
    <HeroSection {...data} />
  )
}

export default About