import React from "react";
import PropTypes from "prop-types";
import "../styles/paginador.css";
import { FaAngleLeft, FaAngleRight, } from "react-icons/fa";

const Paginador = ({ totalDePaginas = 1, paginaActual, onPageChange }) => {
  const totalPaginas = totalDePaginas;

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      onPageChange(nuevaPagina);
    }
  };

  return (
    <div className="paginador">
      <button 
        className="paginador-boton" 
        onClick={() => cambiarPagina(paginaActual - 1)} 
        disabled={paginaActual === 1}
      >
        <FaAngleLeft />
      </button>

      {[...Array(totalPaginas)].map((_, index) => {
        const numeroPagina = index + 1;
        return (
          <button
            key={numeroPagina}
            className={`paginador-boton ${paginaActual === numeroPagina ? "activo" : ""}`}
            onClick={() => cambiarPagina(numeroPagina)}
          >
            {numeroPagina}
          </button>
        );
      })}

      <button 
        className="paginador-boton" 
        onClick={() => cambiarPagina(paginaActual + 1)} 
        disabled={paginaActual === totalPaginas}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

Paginador.propTypes = {
  totalDePaginas: PropTypes.number.isRequired,
  paginaActual: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginador;
