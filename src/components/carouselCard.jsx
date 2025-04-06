import { useState } from "react";
import "../styles/carousel.css"; // Importamos el CSS

const CarouselCard = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default CarouselCard;
