import React, { useState } from 'react';
import './Footer.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const [email, setEmail] = useState('');

    const submitEmail = (e) => {
        e.preventDefault();
        // Your form submission logic goes here
        // After submission, clear the input field
        setEmail('');
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="footer">
            <div className="footer-item1">
                <h4>
                    <span>CAR</span> Rental
                </h4>
                <p>
                    we offers a big range of vehicles for all your driving needs we have the perfect car to meet your
                    needs
                </p>
                <span>
                    <FaPhoneAlt /> (123)-456-789
                </span>
                <span>
                    <MdEmail /> marwa@gmail.com
                </span>
                <span></span>
            </div>

            <div className="footer-item2">
                <span className="header">COMPANY</span>
                <p>New York</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>

            <div className="footer-item2">
                <span className="header">WORKING HOURS</span>
                <p>Mon-Fri:9:00AM - 9:00PM</p>
                <p>Sat-Fri:9:00AM - 19:00PM</p>
                <p>Mon-Fri:closed</p>
            </div>

            <div className="footer-item2">
                <span className="header">SUBSCRIPTION</span>
                <p className="subscribe">Subscribe your Email address for latest news & updates</p>
                <form onSubmit={submitEmail}>
                    <input type="email" placeholder="Enter Email Address" value={email} onChange={handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;
