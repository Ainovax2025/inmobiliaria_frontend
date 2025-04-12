import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaRobot, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import '../styles/socialButtons.css';

const SocialButtons = () => {
  const [temaClaro, setTemaClaro] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const clase = entry.target.className;
            if (clase.includes('seccion-clara')) {
              setTemaClaro(true);
            } else if (clase.includes('seccion-oscura')) {
              setTemaClaro(false);
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    const secciones = document.querySelectorAll('.seccion-clara, .seccion-oscura');
    secciones.forEach(seccion => observer.observe(seccion));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`social-buttons ${temaClaro ? 'tema-claro' : 'tema-oscuro'}`}>
      <a href="#bot" className="social-button">
        <FaRobot />
      </a>
      
      <a href="https://www.instagram.com/mariopaz.inmobiliaria" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaInstagram />
      </a>
      
      <a href="https://www.facebook.com/share/1VMTSFoR94/   " target="_blank" rel="noopener noreferrer" className="social-button">
        <FaFacebookF />
      </a>
      <a href="https://www.tiktok.com/@mariopazinmobiliaria?_t=ZS-8vQfnpCAhR2&_r=1" target="_blank" rel="noopener noreferrer" className="social-button">
        <SiTiktok />
      </a>
    </div>
  );
};

export default SocialButtons;
