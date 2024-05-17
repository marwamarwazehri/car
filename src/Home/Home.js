import React from 'react'
import './Home.css'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import car from '../img/blue_car.jfif'
import {motion} from "framer-motion"
import Book from '../Book/Book'

const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <div className='home-text'>
        <h4>Plan your trip now</h4>
        <h1>Save <span>big</span> with our car rental</h1>
        <p>Rent the car of your dreams.Unbeatable prices, unlimited 
          miles, flexible pick-up options and much more. </p>

          <div className='home-buttons'>
            <button className='book'>Book Ride <IoMdCheckmarkCircle className='check'/></button>
            <button className='more'>Learn More <IoIosArrowForward className='arr'/></button>

          </div>
      </div>

      <motion.div className='home-car'
       initial={{ x: '100%', y: '-100%' }}  
      animate={{ x: 0 , y:0}}
       transition={{ duration:1,}}
      >
       <img src={car}/>
      </motion.div>
      
    </div>

  <Book/>
    </>
  )
}

export default Home
