import { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/filter.css";
import { FaSearch, FaFilter } from "react-icons/fa";

const Filter = ({ onFilterChange }) => {
  const [tipoOperacion, setTipoOperacion] = useState("");
  const [tipoPropiedad, setTipoPropiedad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [botonActivo, setBotonActivo] = useState("Todos");

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    if (name === "tipoOperacion") {
      setTipoOperacion(value);
    } else if (name === "tipoPropiedad") {
      setTipoPropiedad(value);
    }

    onFilterChange({
      tipoOperacion: name === "tipoOperacion" ? value : tipoOperacion,
      tipoPropiedad: name === "tipoPropiedad" ? value : tipoPropiedad,
      ubicacion,
    });
  };

  const aplicarFiltroUbicacion = () => {
    onFilterChange({ tipoOperacion, tipoPropiedad, ubicacion });
  };

  const handleButtonClick = (tipo) => {
    setBotonActivo(tipo);

    onFilterChange({
      tipoOperacion: tipo === "Todos" ? "" : tipo,
      tipoPropiedad,
      ubicacion,
    });
  };

  return (
    <>
      <section className="container">
        <section className="containerFilter">
          <div className="containerSelect">
            <Form.Select name="tipoOperacion" value={tipoOperacion} onChange={handleSelectChange}>
              <option value="">Tipo de operación</option>
              <option value="Alquiler">Arriendo</option>
              <option value="Venta">Venta</option>
            </Form.Select>

            <Form.Select name="tipoPropiedad" value={tipoPropiedad} onChange={handleSelectChange}>
              <option value="">Tipo de inmueble</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Apartaestudio">Apartaestudio</option>
              <option value="Local Comercial">Local</option>
            </Form.Select>
          </div>
          <div className="containerinput">
            <label>
              <input
                type="text"
                placeholder="Busca por ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </label>

            <button onClick={aplicarFiltroUbicacion}>
              <FaSearch /> Buscar
            </button>
          </div>
        </section>
      </section>

      <section className="ContainerFilterMobile">
        <div style={{ width: "85vw", paddingTop: "18px" }}>
          <div className="containerinputMobile">
            <label>
              <input
                type="text"
                placeholder="Busca por ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </label>
          </div>

          <div className="containerbtnsMobile">
            <button className={botonActivo === "Todos" ? "btnSelect" : "buttonMobile"} onClick={() => handleButtonClick("Todos")}>
              Todos
            </button>
            <button className={botonActivo === "Alquiler" ? "btnSelect" : "buttonMobile"} onClick={() => handleButtonClick("Alquiler")}>
              Alquiler
            </button>
            <button className={botonActivo === "Venta" ? "btnSelect" : "buttonMobile"} onClick={() => handleButtonClick("Venta")}>
              Venta
            </button>
            <button className="buttonMobile" >
              <span style={{ color: "#5d6244" }}>
                <FaFilter />
              </span>{" "}
              Filtros
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
