import React from 'react';
import '../styles/navGoback.css';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; // <-- Importar useNavigate

const GoBack = () => {
  const navigate = useNavigate();

  const irAMarket = () => {
    navigate(`/inmobiliaria_frontend/#/marketplace`);
  };

  return (
    <div className="ContainerNavGoBack">
      <button onClick={irAMarket}>
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default GoBack;
