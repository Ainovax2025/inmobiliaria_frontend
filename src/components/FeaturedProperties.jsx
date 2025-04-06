import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../styles/featuredProperties.css";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.avif";
import property3 from "../assets/property3.jpeg";
import property4 from "../assets/property4.jpg";

// 🔹 Datos de las propiedades
const properties = [
  {
    img: property1,
    title: "Casa en el centro",
    price: "$150,000",
    rating: 4.5,
    location: "Bogotá, Colombia",
    beds: 4,
    size: "1600 m²",
    description: "Casa espaciosa en el corazón de la ciudad con acceso a todas las comodidades.",
  },
  {
    img: property2,
    title: "Apartamento moderno",
    price: "$120,000",
    rating: 5,
    location: "Medellín, Colombia",
    beds: 3,
    size: "1400 m²",
    description: "Apartamento elegante con vistas increíbles y excelentes acabados.",
  },
  {
    img: property3,
    title: "Casa en la playa",
    price: "$200,000",
    rating: 3.5,
    location: "Cartagena, Colombia",
    beds: 5,
    size: "1800 m²",
    description: "Hermosa casa frente al mar con piscina y zona de recreación.",
  },
  {
    img: property4,
    title: "Villa de lujo",
    price: "$450,000",
    rating: 4,
    location: "Cali, Colombia",
    beds: 6,
    size: "2000 m²",
    description: "Villa exclusiva con jardín, piscina y todas las comodidades modernas.",
  },
];

// 🔹 Función para renderizar estrellas
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star filled" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }
  return stars;
};

const FeaturedProperties = () => {
  const scrollRef = useRef(null);

  // 🔹 Función para mover el scroll
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="featured-container">
      <div className="header">
        <h2>Propiedades Destacadas</h2>
        <a href="#" className="view-more">Ver todas →</a>
      </div>

      {/* 🔹 Flecha Izquierda */}
      <button className="scroll-button left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>

      {/* 🔹 Contenedor de Propiedades */}
      <div className="properties-wrapper" ref={scrollRef}>
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.img} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="property-location">📍 {property.location}</p>
              <p className="property-details">🛏 {property.beds} Habitaciones | 📏 {property.size}</p>
              <p className="property-price">{property.price}</p>
              <p className="property-description">{property.description}</p>
              <div className="property-rating">{renderStars(property.rating)}</div>
              <button className="book-button">Ver más</button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Flecha Derecha */}
      <button className="scroll-button right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default FeaturedProperties;
