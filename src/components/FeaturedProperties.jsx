import React, { useRef } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRuler, FaBed, FaBath } from 'react-icons/fa';

import '../styles/featuredProperties.css';
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.avif';
import property3 from '../assets/property3.jpeg';

// 🔹 Datos de las propiedades
const properties = [
  {
    img: property1,
    title: 'Casa en el centro',
    price: '$150,000',
    location: 'Bogotá, Colombia',
    beds: 4,
    baths: 2,
    size: '1600 m²',
    description: 'Casa espaciosa en el corazón de la ciudad con acceso a todas las comodidades.'
  },
  {
    img: property2,
    title: 'Apartamento moderno',
    price: '$120,000',
    location: 'Medellín, Colombia',
    beds: 3,
    baths: 1,
    size: '1400 m²'
  },
  {
    img: property3,
    title: 'Casa en la playa',
    price: '$200,000',
    location: 'Cartagena, Colombia',
    beds: 5,
    baths: 3,
    size: '1800 m²'
  }
];

// 🔹 Función para renderizar estrellas
const renderStars = rating => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star filled" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }
  return stars;
};

const FeaturedProperties = () => {
  return (
    <div className="featured-container">
      <h2>Propiedades Destacadas</h2>
      <p>Descubre nuestra selección de propiedades destacadas</p>
      <div className="properties-wrapper">
        {properties.map((property, index) => (
          <div key={index} className="property-card-home">
            <img src={property.img} alt={property.title} className="property-image-home" />
            <div className="property-info-home">
              <h3>{property.title}</h3>
              <p className="property-details">
                <span>
                  <FaBed /> {property.beds} Habitaciones
                </span>
                <span>
                  <FaBath /> {property.baths} baños
                </span>
                <span>
                  <FaRuler /> {property.size}
                </span>
              </p>
              <p className="property-location"> {property.location}</p>

              <p className="property-price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <button className="scroll-button right" onClick={() => scroll('right')}>
        <FaArrowRight />
      </button> */}
    </div>
  );
};

export default FeaturedProperties;
