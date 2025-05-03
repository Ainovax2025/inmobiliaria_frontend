import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home/home';
import Marketing from './pages/marketing/Marketing.js';
import Marketplace from './pages/marketplace/marketplace.js';
import PropiedadDetalle from './pages/marketplace/propiedadDetalle.js';
import CrearPropiedad from './pages/marketplace/crearPropiedad.js';
import CRM from './components/CRM/CRM.jsx'; // Importar el componente CRM
import Citas from './components/CRM/citas.jsx'; // Nuevo componente para Citas
import Analisis from './components/CRM/analisis.jsx'; // Nuevo componente para Análisis
import './styles/app.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="containerAplicacion">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:id" element={<PropiedadDetalle />} />
          <Route path="/marketplace/crearPropiedad" element={<CrearPropiedad />} />
          <Route path="/marketplace/crearPropiedad/:id" element={<CrearPropiedad />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/crm/citas" element={<Citas />} /> {/* Ruta para Citas */}
          <Route path="/crm/analisis" element={<Analisis />} /> {/* Ruta para Análisis */}
        </Routes>
      </div>
    </>
  );
}

export default App;
