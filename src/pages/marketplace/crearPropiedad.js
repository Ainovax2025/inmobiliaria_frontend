import React from 'react';
import '../../styles/crearPropiedad.css';
import DropzoneMultiple from '../../components/dropImagenes';
const CrearPropiedad = () => {
  return (
    <section className="containerCreadorPropiedades">
      <div className="parent">
        <div className="infoPropiedadCard">
          <h4>Detalles de la propiedad</h4>
          <div className="infoPropiedad">
            <div>
              <label className="">Título</label>
              <input type="text" className="" placeholder="Título" />
            </div>
            <div>
              <label className="">Precio</label>
              <input type="number" className="" placeholder="Precio" />
            </div>
            <div>
              <label className="">Tipo</label>
              <select className="">
                <option>Venta</option>
                <option>Arriendo</option>
              </select>
            </div>
            <div>
              <label className="">Estado</label>
              <select className="">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
          <div className="Descripcion">
            <div>
              <label className="">Descripción</label>
              <textarea type="text" className="DescripcionTextArea"></textarea>
            </div>
          </div>
        </div>
        <div className="EspecificacionesCard">
          <h4>Especificaciones</h4>
          <div className="Especificaciones">
            <div>
              <label className="Habitaciones">Habitaciones</label>
              <input type="text" className="HabitacionesInput" />
            </div>
            <div>
              <label className="Baños">Baños</label>
              <input type="text" className="BañosInput" />
            </div>
            <div>
              <label className="Area">
                M<sup>2</sup>
              </label>
              <input type="text" className="AreaInput" />
            </div>
          </div>
        </div>
        <div className="ubicacionCard">
          <h4>Ubicacion</h4>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="">Direccion</label>
            <input type="text" className="" />
          </div>
          <div style={{ display: 'flex', padding: '0px' }}>
            <div>
              <label className="">Ciudad</label>
              <input type="text" className="CiudadInput" />
            </div>
            <div>
              <label className="">Barrio</label>
              <input type="text" className="BarrioInput" />
            </div>
          </div>
        </div>
        <div className="AmenidadesCard">
          <h4>Amenidades</h4>
        </div>
        <div className="ImagenesCard">
          <h4>Imagenes</h4>
          <DropzoneMultiple />
        </div>
        <div className="ContactoCard">
          <h4>Contacto</h4>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0px' }}>
            <label className="">Nombre</label>
            <input type="text" className="" />
          </div>
          <div style={{ display: 'flex', gap: '20px', padding: '10px 0px' }}>
            <div>
              <label className="">Email</label>
              <input type="text" className="CiudadInput" />
            </div>
            <div>
              <label className="">Celular</label>
              <input type="text" className="BarrioInput" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrearPropiedad;
