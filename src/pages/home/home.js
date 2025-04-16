import React from 'react';
import FeaturedProperties from '../../components/FeaturedProperties';
import Bienvenida from '../../components/Bienvenida';
import Estadisticas from '../../components/Estadisticas';
import SocialButtons from '../../components/SocialButtons'; // ✅ Importamos los botones
import '../../styles/home.css';
import Servicios from '../../components/Servicios';
import Equipo from '../../components/Equipo';

const Home = () => {
  return (
    <div>
      <section className="home-container">
        <Bienvenida />
      </section>
      <section className="seccion-clara">
        <Estadisticas />
      </section>
      <section className="seccion-clara">
        <FeaturedProperties />
      </section>
      <section className="seccion-oscura">
        <Servicios />
      </section>
      
      <Equipo />
      <SocialButtons />
      
    </div>
  );
};

export default Home;
