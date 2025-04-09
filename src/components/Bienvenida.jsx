import React from 'react';
import '../styles/bienvenida.css';
import video1 from '../assets/MP.1.mp4';
import { useNavigate } from 'react-router-dom'; // <-- Importar useNavigate

const Bienvenida = () => {
  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/marketplace`);
  };

  return (
    <div className="bienvenida-container">
      <div className="bienvenida-content">
        <div className="bienvenida-text">
          <h1>Descubre el hogar de tus sueños con Mario Paz inmobiliaria</h1>
          <p>Tu nuevo comienzo está más cerca de lo que imaginas</p>
        </div>
        <div className="bienvenida-buttons">
          <button className="btn-primary" onClick={irADetalle}>
            Ver Propiedades
          </button>
        </div>
      </div>

      <div className="port-slide">
        <video src={video1} className="port-image fade" autoPlay muted playsInline loop />
      </div>
    </div>
  );
};

export default Bienvenida;
