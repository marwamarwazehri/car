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
<div className='nav-two'>
        <a className={activeLink === 0 ? 'active' : ''} href="#home" onClick={() => handleLinkClick(0)}>Home</a>
        <a className={activeLink === 1 ? 'active' : ''} href="#About" onClick={() => handleLinkClick(1)}>About</a>
        <a className={activeLink === 2 ? 'active' : ''} href="#vehicle" onClick={() => handleLinkClick(2)}>Vehicle Models</a>
        <a className={activeLink === 3 ? 'active' : ''} href="#testimonials" onClick={() => handleLinkClick(3)}>Testimonials</a>
        <a className={activeLink === 4 ? 'active' : ''} href="#team" onClick={() => handleLinkClick(4)}>Our Team</a>
        <a className={activeLink === 5 ? 'active' : ''} href="#contact" onClick={() => handleLinkClick(5)}>Contact</a>
      </div>

       <div className='nav-three'>
              <button className='sign'>Sign in</button>
              <button className='register'>Register</button>

       </div>

      <div className={sideBar ? 'circle hide' : 'circle'} onClick={toggleSideBar}>
       <div className='nav-icon'>
        <RxHamburgerMenu/>
       </div>
       </div>
        <AnimatePresence>
       <motion.div className={sideBar ? 'side-bar ' : 'side-bar hidden'}
          variants={variants}
         animate={sideBar ? "open" : "closed"}
        
       >
         <div className='sidebar-links'>
           <a className={activeLink === 0 ? 'active' : ''} href="#home" onClick={() => handleLinkClick(0)}>Home</a>
        <a className={activeLink === 1 ? 'active' : ''} href="#About" onClick={() => handleLinkClick(1)}>About</a>
        <a className={activeLink === 2 ? 'active' : ''} href="#vehicle" onClick={() => handleLinkClick(2)}>Vehicle Models</a>
        <a className={activeLink === 3 ? 'active' : ''} href="#testimonials" onClick={() => handleLinkClick(3)}>Testimonials</a>
        <a className={activeLink === 4 ? 'active' : ''} href="#team" onClick={() => handleLinkClick(4)}>Our Team</a>
        <a className={activeLink === 5 ? 'active' : ''} href="#contact" onClick={() => handleLinkClick(5)}>Contact</a>
        
        <IoCloseSharp className='cancel' onClick={()=>setSideBar(false)}/>
         </div>
         <div className='sidebar-buttons'>
             <button className='sign'>Sign in</button>
            <button className='register'>Register</button>
         </div>


       </motion.div>
       </AnimatePresence>

      
    </div>
  )
}

export default Navbar
