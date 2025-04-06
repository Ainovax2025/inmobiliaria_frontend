import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaRobot } from "react-icons/fa";
import "../styles/socialButtons.css";

const SocialButtons = () => {
  const [temaClaro, setTemaClaro] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const clase = entry.target.className;
            if (clase.includes("seccion-clara")) {
              setTemaClaro(true);
            } else if (clase.includes("seccion-oscura")) {
              setTemaClaro(false);
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    const secciones = document.querySelectorAll(".seccion-clara, .seccion-oscura");
    secciones.forEach((seccion) => observer.observe(seccion));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`social-buttons ${temaClaro ? "tema-claro" : ""}`}>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaInstagram />
      </a>
      <a href="mailto:tucorreo@ejemplo.com" className="social-button">
        <FaEnvelope />
      </a>
      <a href="#bot" className="social-button">
        <FaRobot />
      </a>
    </div>
  );
};

export default SocialButtons;
