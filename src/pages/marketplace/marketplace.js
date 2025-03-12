// eslint-disable-next-line no-unused-vars
import styles from '../../styles/marketplace.css';
import React, { useEffect, useState } from 'react';
import PropiedadCard from '../../components/propiedadCard';
import LoadingSpinner from "../../components/spinner.jsx"

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const Marketplace = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerPropiedades = async () => {
    try {
    setLoading(true);
      const response = await fetch(`${BASE_URL}/marketplace`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });    
      if (!response.ok) throw new Error("Error en la obtención de las propiedades");
      
      const data = await response.json();
      console.log(data)
      setPropiedades(data); 
      setLoading(false);

    } catch (error) {
      console.error("Error en la obtención:", error);
    } 
  };

  useEffect(() => {
    obtenerPropiedades();
  }, []);

  return (
    <div className='ContainerPropiedades'>    
    {loading && <LoadingSpinner />}  
      <div className='ContainerCardsPropiedades'>
        {propiedades.map((propiedad) => (
            <PropiedadCard  key={propiedad.id} 
            imageUrl={propiedad.imagenes[0]}
            status={propiedad.tipooperacion}
            price={propiedad.precio}
            tipo={propiedad.tipopropiedad}
            bedrooms={propiedad.banos}
            bathrooms={propiedad.habitaciones}
            area={`${propiedad.area} m2`}
            location={`${propiedad.ciudad}, ${propiedad.direccion}`}
            />
        //   <li key={propiedad.id}>{propiedad.descripcion}</li>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
