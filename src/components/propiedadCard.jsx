// eslint-disable-next-line no-unused-vars
import styles from '../styles/propiedadCard.css';
import React from 'react';
import { useNavigate } from "react-router-dom";  // <-- Importar useNavigate
import { FaRuler, FaBed,FaBath  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const PropiedadCard = ({
  id,
  imageUrl,
  status,
  price,
  tipo,
  bedrooms,
  bathrooms,
  area,
  location,
}) => {
  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/inmobiliaria_frontend/marketing/${id}`);
  };

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
          {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0,maximumFractionDigits: 0 }).format(price)}
        </div>
        <div className="property-location">
          <FaLocationDot/> {location}
        </div>
        <div className="property-details">
        <span>
          <FaBed /> {bedrooms} {bedrooms === 1 ? "habitación" : "habitaciones"}
        </span>
        <span>
          <FaBath /> {bathrooms} {bathrooms === 1 ? "baño" : "baños"}
        </span>
        <span>
          <FaRuler /> {area} m²
        </span>
        </div>
        <div className="property-title">
          {tipo}
          <button onClick={irADetalle}>
            ver detalles
          </button>
        </div>


      </div>
    </div>
  );
};

export default PropiedadCard;
