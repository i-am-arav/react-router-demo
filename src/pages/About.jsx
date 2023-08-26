import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  console.log('location',location)
  return (
    <div style={{margin:'20px'}}>About Page {location.state}</div>
  )
}

export default About