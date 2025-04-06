import React from "react";
import "../styles/estadisticas.css"; // ✅ Asegurar importación correcta

const Estadisticas = () => {
  return (
    <section className="estadisticas-container">
      <div className="estadistica">
        <h2>8530+</h2>
        <p>Ventas de Apartamentos</p>
      </div>
      <div className="estadistica">
        <h2>---+</h2>
        <p>tiempo record en venta de Apartamentos</p>
      </div>
      <div className="estadistica">
        <h2>***+</h2>
        <p>años de experiencia</p>
      </div>
      <div className="estadistica">
        <h2>7504+</h2>
        <p>Clientes satisfechos</p>
      </div>
    </section>
  );
};

export default Estadisticas;
