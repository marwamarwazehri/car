import React, {useState} from 'react'
import './Navbar.css'
import { FaCarSide } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

const [activeLink, setActiveLink] = useState(null);
const [sideBar, setSideBar] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setSideBar(false);
  }

   const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
  
  
    return (
    <div className='nav'>
       <div className='nav_one'>
              <FaCarSide className='car-icon'/>
              <h5><span>CAR</span> Rental</h5>
       </div>

       <div className='nav-three'>
              <button className='sign'>Sign in</button>
              <button className='register'>Register</button>

       </div>

      
      
        

      

      
    </div>
  )
}

export default Navbar
