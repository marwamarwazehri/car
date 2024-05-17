import React, { useState } from 'react';
import './Book.css';
import { cars } from './cars_data';
import { FaCar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { LuDot } from "react-icons/lu";

const Book = () => {
  const [carType, setCarType] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [matchResults, setMatchResults] = useState('');
  
  

  const carTypes = [...new Set(cars.map(car => car.name))];
  const locations = [...new Set(cars.map(car => car.pickupLocation))];
  
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = () => {
    if (!carType || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
     setErrorMessage('Please fill in all fields');
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return;
    }
    
    const results = cars.filter(car => 
      car.name.toLowerCase() === carType.toLowerCase() &&
      car.pickupLocation.toLowerCase() === pickupLocation.toLowerCase() &&
      car.dropoffLocation.toLowerCase() === dropoffLocation.toLowerCase() &&
      car.pickupDate === pickupDate &&
      car.dropoffDate === dropoffDate
    );

    if(results.length===0){
      setMatchResults('No cars match your search criteria');
    setTimeout(() => {
      setMatchResults("");
    }, 5000);
    setCarType("");
    setPickupDate("");
    setPickupLocation('');
    setDropoffDate('');
    setDropoffLocation('');
    return;
    }
    setSearchResults(results);

    setCarType("");
    setPickupDate("");
    setPickupLocation('');
    setDropoffDate('');
    setDropoffLocation('');
    
  };

  return (
    <div className='Book' id="book">

      <h4>Book a car</h4>
      
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className='book-form'>
        <div className='form-element'>
          <label><FaCar  className='form-icon'/>    Select your car type <LuDot className='dot'/></label>
          <select value={carType} onChange={(e) => setCarType(e.target.value)}>
            <option value="">Select Car Type</option>
            {carTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className='form-element'>
          <label><IoLocation  className='form-icon'/>  Pick-up<LuDot className='dot'/></label>
          <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
            <option value="">Select pickup location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className='form-element'>
          <label><IoLocation  className='form-icon'/> Drop-of<LuDot className='dot'/></label>
          <select value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
            <option value="">Select drop off location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className='form-element'>
          <label><CgCalendarDates className='form-icon'/> Pick-up<LuDot className='dot'/></label>
          <input type="date" min={today} value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
        </div>

        <div className='form-element'>
          <label><CgCalendarDates  className='form-icon'/> Drop-of<LuDot className='dot'/></label>
          <input type="date" min={pickupDate || today} value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
        </div>

        <button onClick={handleSearch} className='form-search'>Search</button>
      </div>

     <div className='book-result'>
       
        {searchResults && searchResults.map((car, index) => (
          <div key={index} className='car-item'>
            bbb
          </div>
        ))}
        {matchResults && <p className="match">{matchResults}</p>}
        
      </div>

    </div>
  );
};

export default Book;
