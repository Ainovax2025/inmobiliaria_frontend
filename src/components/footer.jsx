import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre nosotros</h3>
          <p>Agencia Inmobiliaria líder con las mejores propiedades en venta y alquiler.</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#propiedades" onClick={(e) => {
              e.preventDefault();
              const propertiesSection = document.querySelector('.featured-container');
              propertiesSection?.scrollIntoView({ behavior: 'smooth' });
            }}>Propiedades</a></li>
            <li><a href="#servicios" onClick={(e) => {
              e.preventDefault();
              const servicesSection = document.querySelector('.seccion-oscura');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}>Servicios</a></li>
            <li><a href="#contacto" onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('.footer');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}>Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Información de contacto</h3>
          <p>+57 315 7116100</p>
          <p>Soave.01@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Síguenos en</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1VMTSFoR94/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@mariopazinmobiliaria?_t=ZS-8vQfnpCAhR2&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com/mariopaz.inmobiliaria" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 RealEstate Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
