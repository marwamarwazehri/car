import React, { useState, useEffect } from 'react';
import './Models.css';
import { cars } from './cars_data';

const Models = () => {
  const [carDetails, setCarDetails] = useState({});
  const [activeButton, setActiveButton] = useState("Toyota Corolla"); // State to track active button

  const carTypes = [...new Set(cars.map(car => car.name))];

  const getCar = (carName) => {
    const car = cars.filter(car => car.name === carName)[0]; // Get the first (and only) element
    setCarDetails(car);
  }

  useEffect(() => {
    getCar("Toyota Corolla");
  }, []);

  const handleButtonClick = (carName) => {
    getCar(carName);
    setActiveButton(carName); // Set active button when clicked
  }

  return (
    <div className='model'>
      <div className='model-text'>
        <h4>Vehicle Models</h4>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>
      <div className='model-cars'>
        <div className='cars-name'>
          {carTypes.map((name) => (
            <button
              key={name}
              onClick={() => handleButtonClick(name)}
              className={activeButton === name ? 'active' : ''} // Apply 'active' class if activeButton matches current button
            >
              {name}
            </button>
          ))}
        </div>
        <div className='car-img'>
          {carDetails.image && <img src={carDetails.image} alt={carDetails.name} />}
        </div>
        <div className='car-detials'>
          <table>
            <thead>
              <tr>
                <th colSpan="2"><span>${carDetails.pricePerHour}</span> / rent per day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Model</td>
                <td>{carDetails.model}</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>{carDetails.brand}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{carDetails.year}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{carDetails.doors}</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>{carDetails.ac}</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>{carDetails.transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{carDetails.fuel}</td>
              </tr>
            </tbody>
          </table>
          <button className='reserve'><a href="#book" >RESERVE NOW</a></button>
        </div>
      </div>
    </div>
  )
}

export default Models;
