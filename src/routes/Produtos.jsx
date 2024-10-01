import React, { useState } from 'react'
import '../css/Produtos.css'
import Produto1 from '../assets/produto1.jpg';
import Produto2 from '../assets/produto2.jpg';
import Produto3 from '../assets/produto3.jpg';
import Produto4 from '../assets/produto4.jpg';
import Produto5 from '../assets/produto5.jpg';

const carData = [
    {
      id: 1,
      name: "HUNTER HD 4x4 AT",
      imgSrc: Produto1,
      price: "R$ 150,000",
      chargingTime: "1h10 min",
      acceleration: "7.5s",
      battery: "55 kWh",
    },
    {
        id: 2,
        name: "E-JS1",
        imgSrc: Produto2,
        price: "R$ 126,900",
        chargingTime: "1h15 min",
        acceleration: "10.7s",
        battery: "30 kWh",
    },
    {
        id: 3,
        name: "E-JS1-24/25",
        imgSrc: Produto3, // Use your image path here
        price: "R$ 140,000",
        chargingTime: "1h05 min",
        acceleration: "9.0s",
        battery: "30 kWh",
    },
    {
        id: 4,
        name: "E-JS1-EXT",
        imgSrc: Produto4, // Use your image path here
        price: "R$ 140,000",
        chargingTime: "1h10 min",
        acceleration: "6.5s",
        battery: "45 kWh",
    },
    {
        id: 5,
        name: "E-JS4",
        imgSrc: Produto5, // Use your image path here
        price: "R$ 160,000",
        chargingTime: "1h20 min",
        acceleration: "7.5s",
        battery: "55 kWh",
    },
    // Add more cars here
  ];

const Produtos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carData.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carData.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const { name, imgSrc, price, chargingTime, acceleration, battery } =
      carData[currentIndex];
  
    return (
      <div className="carousel-container">
        <div className="carousel-content">
          <button className="carousel-btn prev" onClick={handlePrev}>
            &#10094;
          </button>
  
          <div className="carousel-item">
            <img src={imgSrc} alt={name} className="car-image" />
            <div className="car-details">
              <h2>{name}</h2>
              <p className="price">Preço: {price}</p>
              <div className="car-info">
                <p>{chargingTime} <br /> <small>Tempo recarga</small></p>
                <p>{acceleration} <br /> <small>0 a 100 km/h</small></p>
                <p>{battery} <br /> <small>Bateria</small></p>
              </div>
            </div>
          </div>
  
          <button className="carousel-btn next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
  
        <div className="carousel-dots">
          {carData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  }

export default Produtos