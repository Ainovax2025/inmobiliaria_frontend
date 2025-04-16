import React, { useState } from 'react';
import '../styles/equipo.css';
import perfil1 from '../assets/perfil1.png';
import perfil2 from '../assets/perfil1.png';

const miembros = [
  {
    nombre: 'Sofia Paz',
    cargo: 'Gerente General',
    imagen: perfil1,
    descripcion: 'Contadora Pública y Gerente General especializada en el sector inmobiliario, con más de 5 años de experiencia en gestión financiera y administrativa. Su enfoque estratégico e innovador le ha permitido optimizar procesos internos, incrementar la rentabilidad y posicionar a la empresa como líder en el mercado local. Sofia se destaca por su ética, profesionalismo y atención personalizada, asegurando resultados excepcionales y una experiencia inigualable para todos sus clientes.',
  },
  {
    nombre: 'Carlos Ruiz',
    cargo: 'Asesor Comercial',
    imagen: perfil2,
    descripcion: 'Carlos es un experto en ventas con más de 8 años de experiencia en el sector inmobiliario. Su habilidad para identificar las necesidades de los clientes y ofrecer soluciones efectivas le ha permitido consolidarse como un referente en el área comercial. Carlos es conocido por su enfoque proactivo y su capacidad para establecer relaciones duraderas con sus clientes, brindando un servicio personalizado y de alta calidad.',
  },
];

const Equipo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="equipo-container">
      <h2>Nuestro Equipo</h2>
      <div className="equipo-perfiles">
        {miembros.map((persona, index) => (
          <div
            key={index}
            className={`perfil ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={persona.imagen} alt={persona.nombre} className="perfil-imagen" />
            <div className="perfil-info">
              <h3>{persona.nombre}</h3>
              <p>{persona.cargo}</p>
              <div className="descripcion">{persona.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipo;
