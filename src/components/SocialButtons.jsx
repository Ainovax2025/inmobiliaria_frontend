import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaRobot } from 'react-icons/fa';
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
    <div className={`social-buttons ${temaClaro ? 'tema-claro' : 'tema-claro'}`}>
      <a href="#bot" className="social-button">
        <FaRobot />
      </a>
      <a href="https://api.whatsapp.com/send?phone=15087182173&text=%22Hola%20EVA%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20inmobiliarios.%20%C2%BFMe%20puedes%20ayudar%3F%22%20&fbclid=PAY2xjawJikp1leHRuA2FlbQIxMAABp_SvySXgUytgr8MFfGIvMoqYgLbRYjugGNEy1DH12aKsVB4n8DyYAuzLwMAC_aem_WUuko8XCi3T8pgeelPm6oQ" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/mariopaz.inmobiliaria?igsh=emw4MXdtbDRua2Rr" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaInstagram />
      </a>
      <a href="mailto:mario_a_pm@hotmail.com" className="social-button">
        <FaEnvelope />
      </a>
      
    </div>
  );
};

export default SocialButtons;
