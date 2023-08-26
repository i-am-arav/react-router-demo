import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const {state} = useLocation();
  return (
    <div style={{margin:'20px'}}>About Page {state}</div>
  )
}

export default About