import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home/home';
import Marketing from './pages/marketing/Marketing.js';
import Marketplace from './pages/marketplace/marketplace.js';
import PropiedadDetalle from './pages/marketplace/propiedadDetalle.js';
import CrearPropiedad from './pages/marketplace/crearPropiedad.js';
import Footer from './components/footer.jsx';
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
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
