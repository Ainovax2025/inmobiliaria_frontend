import React from 'react';
import '../styles/equipo.css';
import perfil1 from '../assets/perfil1.png';
import perfil2 from '../assets/perfil2.png'; // Usa una imagen distinta

const miembros = [
  {
    nombre: 'Sofia Paz',
    cargo: 'Gerente General',
    imagen: perfil1,
    descripcion:
      'Contadora Pública y Gerente General especializada en el sector inmobiliario, con más de 5 años de experiencia en gestión financiera y administrativa. Su enfoque estratégico e innovador le ha permitido optimizar procesos internos, incrementar la rentabilidad y posicionar a la empresa como líder en el mercado local. Sofia se destaca por su ética, profesionalismo y atención personalizada, asegurando resultados excepcionales y una experiencia inigualable para todos sus clientes.',
  },
  {
    nombre: 'Susana Ceron',
    cargo: 'Asesora Comercial',
    imagen: perfil2,
    descripcion:
      'Es una destacada Asesora Comercial especializada en el sector inmobiliario, con más de 8 años de experiencia ayudando a clientes a encontrar la propiedad ideal. Su habilidad para entender las necesidades específicas de cada cliente, junto con su compromiso, empatía y excelente comunicación, la convierten en una pieza clave para cerrar negociaciones exitosas. Susana se distingue por brindar un servicio personalizado y asesoría integral, asegurando satisfacción y confianza en cada transacción.',
  },
];

const Equipo = () => {
  return (
    <section className="equipo-container">
      <h2>Nuestro Equipo</h2>
      <div className="equipo-perfiles">
        {miembros.map((persona, index) => (
          <div className="perfil" key={index}>
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
