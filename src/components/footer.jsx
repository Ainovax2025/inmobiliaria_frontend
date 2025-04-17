import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaTiktok } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer-section about">
          <h4>Sobre nosotros</h4>
          <p>Agencia inmobiliaria líder con las mejores propiedades en venta y alquiler.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li>
              <span>Propiedades</span>
            </li>
            <li>
              <span>Servicios</span>
            </li>
            <li>
              <span>Contacto</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Información de contacto</h4>
          <p>
            <FaPhone /> +57 319 7115100
          </p>
          <p>
            <FaEnvelope /> Soeve.01@gmail.com
          </p>
        </div>

        <div className="footer-section social">
          <h4>Siguenos en</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 RealEstate Pro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
