import React from 'react'
import './Testimonials.css'
import personone from '../img/person-one.jfif'
import persontwo from '../img/person-two.jfif'
import { FaQuoteRight } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className='tes'>
       <div className='tes-up'>
              <h4>Reviewed by People</h4>
              <h1>Client's Testimonials</h1>
              <p>Discover the positive impact we've made on the our clients by reading
                      this through their testimonials.Our clients have experienced our 
                      service and results and their eager to share their positive experiences with you</p>
       </div>

      
       <div className='tes-down'>
            
              <div className='review'>
                     <div className='review-text'>
                   <q>We rented a car from this website and had an amazing experience! 
                      the booking was easy and the rental rates were very affordable</q>
              </div>

              <div className='review-person'>
                     <div className='review-person-one'>
                       <img src={personone}/>
                       <div className='person-name'>
                            <h4>Parry Hotter</h4>
                            <p>Beigrade</p>
                       </div>
                     </div>

                     <FaQuoteRight className='quote'/>
                  </div>

              </div>

                <div className='review'>
                     <div className='review-text'>
                   <q>he car was an great condition and made our trip even better 
                     highly recommend for this car rental website</q>
              </div>

              <div className='review-person'>
                     <div className='review-person-one'>
                       <img src={persontwo}/>
                       <div className='person-name'>
                            <h4>Ron Rizzily</h4>
                            <p>Nev Sad</p>
                       </div>
                     </div>

                     <FaQuoteRight className='quote'/>
                  </div>

              </div>
       </div>

      
    </div>
  )
}

export default Testimonials
