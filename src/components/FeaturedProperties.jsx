import React, { useState, useEffect } from 'react';
import { FaRuler, FaBed, FaBath } from 'react-icons/fa';

import '../styles/featuredProperties.css';
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.avif';
import property3 from '../assets/property3.jpeg';
import property4 from '../assets/property4.jpg';
import property5 from '../assets/property5.webp';

// 🔹 Datos de las propiedades
const properties = [
  {
    img: property1,
    title: 'Casa en el centro',
    price: '$150,000',
    location: 'Bogotá, Colombia',
    beds: 4,
    baths: 2,
    size: '1600 m²'
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
  },
  {
    img: property4,
    title: 'Casa de campo',
    price: '$170,000',
    location: 'Cali, Colombia',
    beds: 4,
    baths: 2,
    size: '1500 m²'
  },
  {
    img: property5,
    title: 'Apartamento central',
    price: '$130,000',
    location: 'Pasto, Colombia',
    beds: 2,
    baths: 1,
    size: '1100 m²'
  }
];

const FeaturedProperties = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true); // Estado para controlar la transición
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      // Inicia fade-out
      setFade(false);

      // Espera a que se complete el fade-out antes de cambiar los elementos
      setTimeout(() => {
        setStartIndex(prevIndex => (prevIndex + itemsPerPage) % properties.length);
        // Activa fade-in
        setFade(true);
      }, 500); // Duración del efecto de fade-out en milisegundos
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleProperties = () => {
    const endIndex = startIndex + itemsPerPage;
    if (endIndex <= properties.length) {
      return properties.slice(startIndex, endIndex);
    }
    return [
      ...properties.slice(startIndex),
      ...properties.slice(0, endIndex - properties.length)
    ];
  };

  return (
    <div className="featured-container">
      <h2>Propiedades Destacadas</h2>
      <p>Descubre nuestra selección de propiedades destacadas</p>

      <div className={`properties-wrapper ${fade ? 'fade-in' : 'fade-out'}`}>
        {getVisibleProperties().map((property, index) => (
          <div key={index} className="property-card-home">
            <img
              src={property.img}
              alt={property.title}
              className="property-image-home"
            />
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
              <p className="property-location">{property.location}</p>
              <p className="property-price">{property.price}</p>
              <button className="ver-propiedad-btn">Ver propiedad</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
