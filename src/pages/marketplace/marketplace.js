// eslint-disable-next-line no-unused-vars
import styles from "../../styles/marketplace.css";
import React, { useEffect, useState, useCallback } from "react";
import PropiedadCard from "../../components/propiedadCard";
import LoadingSpinner from "../../components/spinner.jsx";
import Filter from "../../components/filter.jsx";
import Paginador from "../../components/paginador.jsx";
import { useCsrfToken } from "../../components/csrf.jsx";

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

  const csrfToken = useCsrfToken();

  const obtenerPropiedades = useCallback(
    async (pagina = 1, filtrosAplicados = {}) => {
      if (!csrfToken) return;

      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/marketplace/propiedadespaginadas`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
            body: JSON.stringify({ pagina, ...filtrosAplicados }),
          }
        );

        if (!response.ok)
          throw new Error("Error en la obtención de las propiedades");
        const data = await response.json();
        setPropiedades(data.propiedades);
        setData(data);
      } catch (error) {
        console.error("Error en la obtención:", error);
      } finally {
        setLoading(false);
      }
    },
    [csrfToken]
  );

  useEffect(() => {
    const fetchData = async () => {
      await obtenerPropiedades(paginaActual, filtros);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    fetchData();
  }, [paginaActual, filtros, obtenerPropiedades]);

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
              id={propiedad.id}
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
        paginaActual={paginaActual}
        onPageChange={cambiarPagina}
      />
    </div>
  );
};

export default Marketplace;
