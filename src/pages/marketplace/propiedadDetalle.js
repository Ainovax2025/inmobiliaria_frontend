// eslint-disable-next-line no-unused-vars
import styles from '../../styles/propiedadDetalle.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 🔥 Para obtener el ID de la URL
import CarouselCard from '../../components/carouselCard.jsx';
import LoadingSpinner from '../../components/spinner.jsx';
import { FaRuler, FaBed, FaBath, FaWhatsapp } from 'react-icons/fa';
import {} from 'react-icons/fa';
import getAmenityIcon from '../../components/amenidades.jsx';
import agentPlaceholder from '../../assets/wallpapers/Agent2.jpg';
import GoBack from '../../components/navGoback.jsx';
import defaultImage from '../../assets/NoImagenHorizontal.png';
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const PropiedadDetalle = () => {
  const { id } = useParams();

  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const obtenerPropiedadById = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/marketplace/propiedadById/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Error en la obtención de la propiedad');
        }

        const data = await response.json();
        setPropiedad(data);
      } catch (error) {
        console.error('Error en la obtención:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerPropiedadById();
  }, [id]);

  return (
    <>
      {window.innerWidth <= 900 && <GoBack />}
      <div className="containerPD">
        <section className="containerPropiedadeDetalle">
          <section className="containerCarousel">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <CarouselCard images={propiedad.imagenes.length > 0 ? propiedad.imagenes : [defaultImage]} />
                <span className="spanTipoOperacionMobile">{propiedad.tipooperacion}</span>
              </>
            )}
          </section>
          <section className="infoContainer">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="ContainerInfoPropiedad">
                  <h2 className="precioPropiedadMobile">
                    {' '}
                    {new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    }).format(propiedad.precio)}
                    {propiedad.tipooperacion.includes('Venta') ? '' : '/mes'}
                  </h2>

                  <h1 className="tituloPropiedad">{propiedad.titulo}</h1>
                  <p className="ubicacionPropiedad">
                    {propiedad.ciudad}, {propiedad.direccion}
                  </p>
                  <div className="ContainerPrice">
                    <h2 className="precioPropiedad">
                      {' '}
                      {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(propiedad.precio)}
                      {propiedad.tipooperacion.includes('Venta') ? '' : '/mes'}
                    </h2>
                    <span>Para {propiedad.tipooperacion}</span>
                  </div>

                  <div className="detallesPropiedad">
                    <span>
                      <FaBed /> {propiedad.habitaciones}
                      {propiedad.habitaciones === 1 ? ' habitación' : ' habitaciones'}
                    </span>
                    <span>
                      <FaBath /> {propiedad.banos}
                      {propiedad.banos === 1 ? ' baño' : ' baños'}
                    </span>

                    <span>
                      <FaRuler /> {propiedad.area} m²
                    </span>
                  </div>
                  <div className="Containerdescripcion">
                    <h3>Caracteristicas</h3>
                    <p className="descripcionPropiedad">{propiedad.descripcion}</p>
                  </div>
                  {propiedad.amenidades.length > 0 && (
                    <div className="ContainerAmenidades">
                      <h3>Amenidades</h3>
                      <div className="amenidadesPropiedad">
                        {propiedad.amenidades.map((amenidad, index) => (
                          <div key={index} className="amenidadItem">
                            {getAmenityIcon(amenidad)}
                            <span>{amenidad}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="ContainerFormContacto">
                  <form className="formContacto">
                    <div className="agentCard">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px'
                        }}>
                        <img src={agentPlaceholder} alt="Agente John Smith" className="agentImage" />
                        <div className="agentInfo">
                          <h3 className="agentName">David Montero</h3>
                          <p className="agentTitle">Agente inmobiliario</p>
                        </div>
                      </div>
                    </div>
                    <input type="text" placeholder="Tu Nombre" required />
                    <input type="email" placeholder="Tu Email" required />
                    <input type="tel" placeholder="Tu Teléfono" required />
                    <textarea placeholder="Mensaje" required></textarea>
                    <button type="submit">Contactar Agente</button>
                    <button type="button">
                      <FaWhatsapp /> Whatsapp
                    </button>
                  </form>
                </div>
              </>
            )}
          </section>
        </section>
      </div>
    </>
  );
};

export default PropiedadDetalle;
