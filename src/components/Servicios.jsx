import React from 'react';
import { FaBalanceScale, FaHome, FaFileContract, FaKey, FaChartLine, FaTools, FaBroom, FaMoneyCheckAlt } from 'react-icons/fa';
import '../styles/servicios.css';

const Servicios = () => {
  const servicios = [
    {
      titulo: 'Asesorías',
      descripcion: 'Asesoría jurídica y contable en compra o venta de propiedad.',
      icono: <FaBalanceScale />
    },
    {
      titulo: 'Venta',
      descripcion: 'Avalúos, fotografía, video y gestión total del proceso de venta.',
      icono: <FaHome />
    },
    {
      titulo: 'Compra',
      descripcion: 'Ofrecemos estudio de títulos para garantizar una compra segura.',
      icono: <FaFileContract />
    },
    {
      titulo: 'Arriendos',
      descripcion: 'Garantizamos pago mensual del arriendo aunque no pague el inquilino.',
      icono: <FaKey />
    },
    {
      titulo: 'Avalúos comerciales',
      descripcion: 'Determinamos valor real del inmueble con base en el mercado.',
      icono: <FaChartLine />
    },
    {
      titulo: 'Reparaciones locativas',
      descripcion: 'Servicios de pintura, electricidad y plomería para propiedades.',
      icono: <FaTools />
    },
    {
      titulo: 'Aseo por horas',
      descripcion: 'Ofrecemos servicio flexible de limpieza por horas en hogares.',
      icono: <FaBroom />
    },
    {
      titulo: 'Caja Honor',
      descripcion: 'Ofrecemos soluciones de vivienda a los miembros de las Fuerzas Militares y la Policía Nacional de Colombia.',
      icono: <FaMoneyCheckAlt />
    }
  ];

  return (
    <div className="servicios-container">
      <h2 className="servicios-title">Nuestros Servicios</h2>

      <div className="servicios-list">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-list">
            <div className="servicio-logo">{servicio.icono}</div>
            <strong>{servicio.titulo}</strong>
            <div className="servicio-content">{servicio.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
