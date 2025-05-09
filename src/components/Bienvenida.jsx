import React from 'react';
import '../styles/bienvenida.css';
import video1 from '../assets/MP.1.mp4';
import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/marketplace`);
  };

  return (
    <div className="bienvenida-container">
      <video
        src={video1}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // mejora el tiempo de arranque
        poster="/images/fallback.jpg" // opcional: imagen mientras carga
      />
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
    </div>
  );
};

export default Bienvenida;
