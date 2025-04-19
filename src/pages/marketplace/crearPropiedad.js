import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/crearPropiedad.css';
import DropzoneMultiple from '../../components/dropImagenes';
import LoadingSpinner from '../../components/spinner.jsx';
import { useCsrfToken } from '../../components/csrf.jsx';
import getAmenityIcon from '../../components/amenidades.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const CrearPropiedad = () => {
  const csrfToken = useCsrfToken();
  const url = [
    'https://s3.amazonaws.com/imagenesprof.fincaraiz.com.co/OVFR_COL/2021/12/2/2354528_995_11.jpg',
    'https://img.mitula.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTU2YzA4LWYxZWUtNzY2OS04NTZiLWU4NzExZmYxYTI2ZC8wMTk1NmMxZC04OGU0LTcwYTYtOTFkMC1lODkzNjNiOTdiNTIuanBnIiwiYnJhbmQiOiJtaXR1bGEiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIzMCwiZml0IjoiY292ZXIifX19',
    'https://images.ctfassets.net/8lc7xdlkm4kt/6bYolzLQSPgZawCDlHb9qr/ca35368f17fc3143fe969c9b074a73de/mint-apartamentos-barranquilla-sala.jpg'
  ];
  const { id } = useParams(); // esto vendrá de la ruta /editarpropiedad/:id
  const modoEdicion = !!id;
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);
  const [amenidades, setAmenidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amenidadesSeleccionadas, setAmenidadesSeleccionadas] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [datosPropiedad, setDatosPropiedad] = useState({
    usuarioId: storedUser.id,
    titulo: '',
    precio: '',
    tipo: 'Venta',
    tipoPropiedad: 'casa',
    estado: 'Activo',
    descripcion: '',
    habitaciones: '',
    banos: '',
    area: '',
    antiguedad: '',
    destacado: false,
    contacto: {
      nombre: '',
      email: '',
      celular: ''
    },
    ubicacion: {
      direccion: '',
      ciudad: '',
      barrio: ''
    },
    fechaPublicacion: new Date(),
    urlImagen: url
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAmenidades = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/marketplace/amenidades`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          }
        });

        if (!response.ok) throw new Error('Error en la obtención de las propiedades');
        const data = await response.json();
        setAmenidades(data);
      } catch (error) {
        console.error('Error en la obtención:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPropiedad = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/marketplace/propiedadById/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          }
        });

        if (!response.ok) throw new Error('Error al obtener la propiedad');
        const data = await response.json();
        setDatosPropiedad({
          usuarioId: data.idusuario,
          titulo: data.titulo || '',
          precio: data.precio || '',
          tipo: data.tipooperacion || 'Venta',
          tipoPropiedad: data.tipopropiedad || 'casa',
          estado: data.activo ? 'Activo' : 'Inactivo',
          descripcion: data.descripcion || '',
          habitaciones: data.habitaciones || '',
          banos: data.banos || '',
          area: data.area || '',
          antiguedad: data.antiguedad || '',
          destacado: data.destacado || false,
          contacto: {
            nombre: data.contacto?.nombre || '',
            email: data.contacto?.email || '',
            celular: data.contacto?.celular || ''
          },
          ubicacion: {
            direccion: data.direccion || '',
            ciudad: data.ciudad || '',
            barrio: data.barrio || ''
          },
          fechaPublicacion: data.fechapublicacion || new Date(),
          urlImagen: data.imagenes || [],
          amenidades: data.amenidades || []
        });
      } catch (error) {
        toast.error('Error al cargar la propiedad');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (modoEdicion && csrfToken) {
      fetchPropiedad();
    }

    if (csrfToken) {
      fetchAmenidades();
    }
  }, [csrfToken, id, modoEdicion]);

  useEffect(() => {
    if (modoEdicion && datosPropiedad.amenidades && amenidades.length > 0) {
      const idsSeleccionados = amenidades.filter(a => datosPropiedad.amenidades.includes(a.nombre)).map(a => a.id);

      setAmenidadesSeleccionadas(idsSeleccionados);
    }
  }, [modoEdicion, datosPropiedad.amenidades, amenidades]);

  const toggleAmenidadSeleccionada = id => {
    setAmenidadesSeleccionadas(
      prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id) // Quitar si ya estaba
          : [...prev, id] // Agregar si no estaba
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setDatosPropiedad(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactoChange = e => {
    const { name, value } = e.target;
    setDatosPropiedad(prev => ({
      ...prev,
      contacto: {
        ...prev.contacto,
        [name]: value
      }
    }));
  };

  const handleUbicacionChange = e => {
    const { name, value } = e.target;
    setDatosPropiedad(prev => ({
      ...prev,
      ubicacion: {
        ...prev.ubicacion,
        [name]: value
      }
    }));
  };
  const bloquearSignos = e => {
    if (['-', '+', 'e'].includes(e.key)) {
      e.preventDefault();
    }
  };
  const validarFormulario = () => {
    const {
      titulo,
      precio,
      tipo,
      tipoPropiedad,
      estado,
      descripcion,
      habitaciones,
      banos,
      area,
      antiguedad,
      contacto,
      ubicacion
    } = datosPropiedad;

    if (!titulo.trim()) return 'El título es obligatorio.';
    if (!precio) return 'El precio es obligatorio.';
    if (!tipo) return 'Debe seleccionar el tipo (Venta o Arriendo).';
    if (!tipoPropiedad) return 'Debe seleccionar el tipo de propiedad.';
    if (!estado) return 'Debe seleccionar el estado.';
    if (!descripcion.trim()) return 'La descripción es obligatoria.';
    if (!habitaciones) return 'Debe ingresar la cantidad de habitaciones.';
    if (!banos) return 'Debe ingresar la cantidad de baños.';
    if (!area.trim()) return 'Debe ingresar el área.';
    if (!antiguedad) return 'Debe ingresar la antigüedad.';
    if (!contacto.nombre.trim()) return 'El nombre de contacto es obligatorio.';
    if (!contacto.email.trim()) return 'El email de contacto es obligatorio.';
    if (!contacto.celular) return 'El celular de contacto es obligatorio.';
    if (!ubicacion.direccion.trim()) return 'La dirección es obligatoria.';
    if (!ubicacion.ciudad.trim()) return 'La ciudad es obligatoria.';
    if (!ubicacion.barrio.trim()) return 'El barrio es obligatorio.';

    return null; // Todo bien
  };

  const handleSubmit = async () => {
    const error = validarFormulario();

    if (error) {
      toast.error(error);
      return;
    }

    const datosCompletos = {
      ...datosPropiedad,
      amenidades: amenidadesSeleccionadas,
      urlImagen: imagenesSeleccionadas.length > 0 ? imagenesSeleccionadas : datosPropiedad.urlImagen
    };

    try {
      setLoading(true);

      const endpoint = modoEdicion
        ? `${BASE_URL}/marketplace/editarPropiedad/${id}`
        : `${BASE_URL}/marketplace/crearpropiedad`;

      const method = modoEdicion ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(datosCompletos)
      });

      const resultado = await response.json();

      if (!response.ok) {
        throw new Error(resultado.message || 'Error al guardar la propiedad');
      }

      toast.success(modoEdicion ? 'Propiedad actualizada con éxito' : 'Propiedad creada con éxito');
      setTimeout(() => {
        navigate('/marketplace');
      }, 1500);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.error('Error guardando propiedad:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="containerCreadorPropiedades">
      {loading && <LoadingSpinner />}
      <div className="parent">
        <div className="infoPropiedadCard">
          <div className="infoPropiedadContainer">
            <h4>Detalles de la propiedad</h4>
            <div className="infoPropiedad">
              <div>
                <label>Título</label>
                <input
                  type="text"
                  name="titulo"
                  placeholder="Título"
                  value={datosPropiedad.titulo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Precio</label>
                <input
                  type="number"
                  min="0"
                  onKeyDown={bloquearSignos}
                  name="precio"
                  placeholder="Precio"
                  value={datosPropiedad.precio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Tipo</label>
                <select name="tipo" value={datosPropiedad.tipo} onChange={handleChange}>
                  <option>Venta</option>
                  <option>Alquiler</option>
                </select>
              </div>
              <div>
                <label>Estado</label>
                <select name="estado" value={datosPropiedad.estado} onChange={handleChange}>
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
              <div>
                <label>Destacado</label>
                <select
                  name="destacado"
                  value={datosPropiedad.destacado ? 'Si' : 'No'}
                  onChange={e =>
                    setDatosPropiedad(prev => ({
                      ...prev,
                      destacado: e.target.value === 'Si'
                    }))
                  }>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="Descripcion">
              <div>
                <label>Descripción</label>
                <textarea
                  type="text"
                  name="descripcion"
                  className="DescripcionTextArea"
                  value={datosPropiedad.descripcion}
                  onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="EspecificacionesCard">
          <h4>Especificaciones</h4>
          <div className="Especificaciones">
            <div>
              <label className="Habitaciones">Habitaciones</label>
              <input
                type="number"
                min="0"
                onKeyDown={bloquearSignos}
                name="habitaciones"
                className="HabitacionesInput"
                value={datosPropiedad.habitaciones}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="Banos">Baños</label>
              <input
                type="number"
                min="0"
                onKeyDown={bloquearSignos}
                name="banos"
                className="BañosInput"
                value={datosPropiedad.banos}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="Area">
                M<sup>2</sup>
              </label>
              <input
                type="number"
                min="0"
                onKeyDown={bloquearSignos}
                name="area"
                className="AreaInput"
                value={datosPropiedad.area}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="Antiguedad">Antiguedad</label>
              <input
                type="number"
                min="0"
                onKeyDown={bloquearSignos}
                name="antiguedad"
                className="AreaInput"
                placeholder="años"
                value={datosPropiedad.antiguedad}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Tipo</label>
              <select name="tipoPropiedad" value={datosPropiedad.tipoPropiedad} onChange={handleChange}>
                <option>Casa</option>
                <option>Local Comercial</option>
                <option>Apartamento</option>
                <option>Oficina</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ImagenesCard">
          <h4 style={{ marginBottom: '10px' }}>Imagenes</h4>
          <DropzoneMultiple initialImages={datosPropiedad.urlImagen} onImagesChange={setImagenesSeleccionadas} />
        </div>
        <div className="AmenidadesCard">
          <div>
            <h4 style={{ marginBottom: '10px' }}>Amenidades</h4>
            <div className="containerListAmenidades">
              {amenidades.map(amenidad => (
                <div
                  key={amenidad.id}
                  className={`amenidadItem listAmenidad ${
                    amenidadesSeleccionadas.includes(amenidad.id) ? 'amenidadActive' : ''
                  }`}
                  onClick={() => toggleAmenidadSeleccionada(amenidad.id)}>
                  {getAmenityIcon(amenidad.nombre)}
                  <span>{amenidad.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ContactoCard">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4>Contacto</h4>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Nombre</label>
              <input type="text" name="nombre" value={datosPropiedad.contacto.nombre} onChange={handleContactoChange} />
            </div>
            <div className="ContactoInputs">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={datosPropiedad.contacto.email}
                  onChange={handleContactoChange}
                />
              </div>
              <div>
                <label>Celular</label>
                <input
                  type="number"
                  min="0"
                  onKeyDown={bloquearSignos}
                  name="celular"
                  value={datosPropiedad.contacto.celular}
                  onChange={handleContactoChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ubicacionCard">
          <h4 style={{ marginBottom: '10px' }}>Ubicacion</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Direccion</label>
              <input
                type="text"
                name="direccion"
                value={datosPropiedad.ubicacion.direccion}
                onChange={handleUbicacionChange}
              />
            </div>
            <div className="ubicacionInputs">
              <div>
                <label>Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  className="CiudadInput"
                  value={datosPropiedad.ubicacion.ciudad}
                  onChange={handleUbicacionChange}
                />
              </div>
              <div>
                <label>Barrio</label>
                <input
                  type="text"
                  name="barrio"
                  className="BarrioInput"
                  value={datosPropiedad.ubicacion.barrio}
                  onChange={handleUbicacionChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className="btnCrearPropiedad" onClick={handleSubmit}>
          {modoEdicion ? 'Guardar cambios' : 'Crear propiedad'}
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default CrearPropiedad;
