import React from 'react'
import './About.css'
import { data } from './data'


const About = () => {
  return (
       <div className='about-container' id="about">
               <h5>Plan your trip now</h5>
              <h1>Quick & easy car rental</h1>
    <div className='about' >
       {
              data.map((item)=>{
                     const {title, icon:Icon, text}=item;
                  return (<div className='about-item'>
                      <Icon className='icon-item' />
                      <h4>{title}</h4>
                      <p>{text}</p>
                  </div>)
              })
       }
      
    </div>
    </div>
  )
}

export default About
