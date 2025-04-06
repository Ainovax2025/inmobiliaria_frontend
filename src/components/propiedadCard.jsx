// eslint-disable-next-line no-unused-vars
import styles from '../styles/propiedadCard.css';
import React from 'react';

import { FaRuler, FaBed,FaBath  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

//=============================================

import 'animate.css';

const Nav = () => {
  return (
    <nav className="animate__animated animate__fadeInDown">
      <h1>Mi Navegación</h1>
    </nav>
  );
};

//=============================================

const PropiedadCard = ({
  imageUrl,
  status,
  price,
  tipo,
  bedrooms,
  bathrooms,
  area,
  location,
}) => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img
          src={imageUrl}
          alt="Property"
          className="property-image"
        />
        <span className="property-status">
          {status}
        </span>
      </div>
      <div className="property-info">
        <div className="property-price">
          {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price)}
        </div>
        <div className="property-title">
          {tipo}
        </div>
        <div className="property-details">
          <span><FaBed /> {bedrooms} </span>
          <span><FaBath /> {bathrooms} </span>
          <span><FaRuler/> {area}</span>
        </div>
        <div className="property-location">
          <FaLocationDot/> {location}
        </div>
      </div>
    </div>
  );
};

export default PropiedadCard;
