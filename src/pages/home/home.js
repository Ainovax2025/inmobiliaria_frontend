import React from "react"; 
import FeaturedProperties from "../../components/FeaturedProperties";
import Bienvenida from "../../components/Bienvenida";
import Estadisticas from "../../components/Estadisticas"; 
import SocialButtons from "../../components/SocialButtons"; // ✅ Importamos los botones
import "../../styles/home.css";
import Servicios from "../../components/Servicios";

const Home = () => {
  return (
    <div className="home-container">

      {/* 🔆 Cartel de Bienvenida con fondo claro */}
      <section className="seccion-oscuraoscura">
        <Bienvenida />
      </section>

      {/* 📊 Sección de estadísticas con fondo oscuro */}
      <section className="seccion-clara">
        <Estadisticas />
      </section>

      {/* 🛠️ Servicios con fondo oscuro */}
      <section className="seccion-oscura">
        <Servicios />
      </section>
        
      {/* 🏡 Ofertas de viviendas con fondo claro */}
      <section className="seccion-clara">
        <FeaturedProperties />
      </section>

      {/* ✅ Botones de redes sociales siempre visibles */}
      <SocialButtons />

      {/* 📞 Botón de contacto con fondo claro */}
      <section className="seccion-clara">
        <button className="elegant-button">Contáctanos</button>
      </section>

    </div>
  );
};

export default Home;
