import React from 'react';
import { FaInstagram, FaRobot, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import '../styles/socialButtons.css';

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href="https://wa.link/y07kts" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Bot">
        <FaRobot />
      </a>
      
      <a href="https://www.instagram.com/mariopaz.inmobiliaria" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Instagram">
        <FaInstagram />
      </a>
      
      <a href="https://www.facebook.com/share/1VMTSFoR94/" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Facebook">
        <FaFacebookF />
      </a>

      <a href="https://www.tiktok.com/@mariopazinmobiliaria?_t=ZS-8vQfnpCAhR2&_r=1" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="TikTok">
        <SiTiktok />
      </a>
    </div>
  );
};

export default SocialButtons;
