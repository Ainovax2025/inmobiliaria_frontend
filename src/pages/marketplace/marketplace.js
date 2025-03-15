// eslint-disable-next-line no-unused-vars
import styles from "../../styles/marketplace.css";
import React, { useEffect, useState } from "react";
import PropiedadCard from "../../components/propiedadCard";
import LoadingSpinner from "../../components/spinner.jsx";
import Filter from "../../components/filter.jsx";
import Paginador from "../../components/paginador.jsx";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const Marketplace = () => {
  const [Data, setData] = useState([]);
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [filtros, setFiltros] = useState({
    tipoOperacion: "",
    tipoPropiedad: "",
    ubicacion: "",
  });

  const obtenerPropiedades = async (pagina = 1, filtrosAplicados = {}) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/marketplace/propiedadespaginadas`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pagina, ...filtrosAplicados }), // Enviar los filtros aplicados
        }
      );

      if (!response.ok)
        throw new Error("Error en la obtención de las propiedades");
      const data = await response.json();
      setPropiedades(data.propiedades);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error en la obtención:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      obtenerPropiedades(paginaActual, filtros);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    fetchData();
  }, [paginaActual, filtros]);

  const manejarCambioFiltros = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
    setPaginaActual(1);
  };

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
    obtenerPropiedades(nuevaPagina, filtros);
  };

  return (
    <div className="ContainerPropiedades">
      <Filter onFilterChange={manejarCambioFiltros} />
      {loading && <LoadingSpinner />}
      <div className="ContainerCards">
        <div className="ContainerCardsPropiedades">
          {propiedades.map((propiedad) => (
            <PropiedadCard
              key={propiedad.id}
              imageUrl={propiedad.imagenes[0]}
              status={propiedad.tipooperacion}
              price={propiedad.precio}
              tipo={propiedad.tipopropiedad}
              bedrooms={propiedad.banos}
              bathrooms={propiedad.habitaciones}
              area={`${propiedad.area}`}
              location={`${propiedad.ciudad}, ${propiedad.direccion}`}
            />
          ))}
        </div>
      </div>
      <Paginador
        totalDePaginas={Data.totalPaginas}
        onPageChange={cambiarPagina}
      />
    </div>
  );
};

export default Marketplace;
