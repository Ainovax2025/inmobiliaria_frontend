import React, { useState, useEffect } from "react";
import "../styles/bienvenida.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

const Bienvenida = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bienvenida-container">
      <div className="bienvenida-content">
        <h1 className="bienvenida-title">Descubre el hogar de tus sueños con Inmobiliaria Paz</h1>
        <p className="bienvenida-subtitle">Tu nuevo comienzo está más cerca de lo que imaginas</p>
        <div className="bienvenida-buttons">
          <button className="btn-primary">Ver Propiedades</button>
          <button className="btn-secondary">Explorar</button>
        </div>
      </div>
      <div className="port-slide">
        <img src={images[currentImage]} alt="port" className="port-image" />
      </div>
    </div>
  );
};

export default Bienvenida;
