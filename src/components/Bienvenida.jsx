import React, { useState, useEffect, useRef } from 'react';
import '../styles/bienvenida.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img.2.png';
import img3 from '../assets/img3.jpg';
import video1 from '../assets/MP.1.mp4';

const mediaItems = [
  { type: 'image', src: img1 },
  { type: 'video', src: video1 },
  { type: 'image', src: img2 },
  { type: 'image', src: img3 }
];

const Bienvenida = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentMedia = mediaItems[currentIndex];

    if (currentMedia.type === 'image') {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
      }, 3500);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="bienvenida-container">
      <div className="bienvenida-content">
        <div className="bienvenida-text">
          <h1>Descubre el hogar de tus sueños con Mario Paz inmobiliaria</h1>
          <p>Tu nuevo comienzo está más cerca de lo que imaginas</p>
        </div>
        <div className="bienvenida-buttons">
          <button className="btn-primary">Ver Propiedades</button>
        </div>
      </div>

      <div className="port-slide">
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src}
            alt="port"
            className="port-image fade"
          />
        ) : (
          <video
            ref={videoRef}
            src={currentMedia.src}
            className="port-image fade"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
          />
        )}
      </div>
    </div>
  );
};

export default Bienvenida;
