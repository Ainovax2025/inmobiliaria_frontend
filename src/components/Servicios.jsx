import React jjfrom 'react';
import { FaBalanceScale, FaHome, FaFileContract, FaKey, FaChartLine, FaTools, FaBroom } from 'react-icons/fa';
import '../styles/servicios.css';

const Servicios = () => {
  const servicios = [
    {
      titulo: 'Asesorías',
      descripcion:
        'Brindamos asesoría jurídica y contable (declaración de renta) en la compra o venta de una propiedad.',
      icono: <FaBalanceScale />
    },
    {
      titulo: 'Venta',
      descripcion:
        'Realizamos avalúos, fotografía profesional, video publicitario y gestionamos todo el proceso de venta.',
      icono: <FaHome />
    },
    {
      titulo: 'Compra',
      descripcion: 'Ofrecemos estudio de títulos para garantizar una compra segura.',
      icono: <FaFileContract />
    },
    {
      titulo: 'Arriendos',
      descripcion: 'Garantizamos el pago mensual del arriendo, incluso si el inquilino no paga.',
      icono: <FaKey />
    },
    {
      titulo: 'Avalúos comerciales',
      descripcion: 'Determinamos el valor real del inmueble según el mercado.',
      icono: <FaChartLine />
    },
    {
      titulo: 'Reparaciones locativas',
      descripcion: 'Servicio de pintura, electricidad y plomería para propiedades.',
      icono: <FaTools />
    },
    {
      titulo: 'Aseo por horas',
      descripcion: 'Ofrecemos servicio de limpieza flexible y por horas.',
      icono: <FaBroom />
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
