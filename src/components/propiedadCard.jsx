import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRuler, FaBed, FaBath } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { BiSolidEdit } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoadingSpinner from '../components/spinner.jsx';
import { EstadoUsuarioContext } from '../components/estadoUsuarioActivo';
import defaultImage from '../assets/noimage.png';
import '../styles/propiedadCard.css';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const PropiedadCard = ({ id, imageUrl, status, price, tipo, bedrooms, bathrooms, area, location, onDelete }) => {
  const navigate = useNavigate();
  const { user } = useContext(EstadoUsuarioContext);
  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal);

  const irADetalle = () => navigate(`/marketplace/${id}`);
  const EditarPropiedad = () => navigate(`/marketplace/crearPropiedad/${id}`);

  const eliminarPropiedadById = async id => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/marketplace/eliminarpropiedadById/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Error al eliminar la propiedad');
      const data = await response.json();
      console.log(data);
      if (onDelete) onDelete(id);
    } catch (error) {
      console.error('Error al eliminar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la propiedad de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'my-popup',
        title: 'my-title',
        confirmButton: 'my-confirm-btn',
        cancelButton: 'my-cancel-btn'
      }
    }).then(result => {
      if (result.isConfirmed) {
        eliminarPropiedadById(id);
      }
    });
  };

  return (
    <div className="property-card">
      {loading && <LoadingSpinner />}
      <div className="property-image-container">
        <img
          src={typeof imageUrl === 'string' && imageUrl.trim() ? imageUrl : defaultImage}
          alt="Property"
          className="property-image"
          onError={e => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
        <span className="property-status">{status}</span>
        {user?.rol === 'admin' && (
          <div className="property-buttons">
            <button className="Edit-Property" onClick={EditarPropiedad}>
              <BiSolidEdit />
            </button>
            <button className="Delete-Property" onClick={handleDelete}>
              <TiDelete />
            </button>
          </div>
        )}
      </div>
      <div className="property-info">
        <div className="property-price">
          {new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(price)}
        </div>
        <div className="property-location">
          <FaLocationDot /> {location}
        </div>
        <div className="property-details">
          <span>
            <FaBed /> {bedrooms} {bedrooms === 1 ? 'habitación' : 'habitaciones'}
          </span>
          <span>
            <FaBath /> {bathrooms} {bathrooms === 1 ? 'baño' : 'baños'}
          </span>
          <span>
            <FaRuler /> {area} m²
          </span>
        </div>
        <div className="property-title">
          {tipo}
          <button onClick={irADetalle}>Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default PropiedadCard;
