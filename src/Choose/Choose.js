import React from 'react'
import './Choose.css'
import jeep from '../img/jeep.jfif'
import range from '../img/blue-range.jfif'
import backCar from '../img/back-car.jfif'
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { AiTwotoneCar } from "react-icons/ai";


const Choose = () => {
  return (
    <div className='choose'>
       <div className='choose-title'>
              <h1>Save big with our cheap car rental!</h1>
              <p>Top Airports.Local Suppliers.<span>24/7</span> Support.</p>

       </div>
       
      <div className='choose-images'>
  <div className='image-container'>
    <img src={backCar} className='backcar' />
  </div>
  <div className='image-container'>
    <img src={jeep} className='jeep' />
  </div>
  <div className='image-container'>
    <img src={range} className='range' />
  </div>
</div>


<div className='choose-us'>
             <div className='choose-us-left'>
                <h4>Why Choose Us</h4>
                <h1>Best Valued deals you will ever find</h1>
                <p>Discover the best deals you will ever find with our unbeatable 
                     offers we dedicated to providing you the best value for your money
                      so you can enjoy topic quality services and products without breaking 
                      the bank our deals or designed to give you the ultimate renting
                      experience so don't miss out on your chance to save big.
                      </p>
                     
               <button>Find Details <IoIosArrowForward/></button>
              </div> 


              <div className='choose-us-right'>
                   
                     <div className='right-item'>
                           
                            <AiTwotoneCar className='right-item-icon'/>
                           
                            <div className='right-item-text'>
                                <h1>Cross Country Drive</h1>
                                <p>Take your driving experience to the next level with our 
                                   top-notch vehicles for your cross-country Adventures.</p>
                            </div>

                     </div>

                     <div className='right-item'>
                           
                            <AiOutlineDollar className='right-item-icon'/>
                           
                            <div className='right-item-text'>
                                <h1>All Inclusive Pricing</h1>
                                <p>Get everything you need in one convenient 
                                   transparent price with our all-inclusive pricing
                                    policy.</p>
                            </div>
                    </div>

                    <div className='right-item'>
                           
                            <FaHandHoldingDollar className='right-item-icon'/>
                           
                            <div className='right-item-text'>
                                <h1>No Hidden Charges</h1>
                                <p>Enjoy peace of mind with our no 
                                   hidden charges policy we believe in transparent 
                                   and honest pricing.</p>
                            </div>
                    </div>
                    
                     
                     
       </div> 
       </div>
      
    </div>
  )
}

export default Choose
