import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
import Marketplace from "./pages/marketplace/marketplace.js";
import PropiedadDetalle from "./pages/marketplace/propiedadDetalle.js";
import InfoBottomPage from "./components/infoBottomPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "50px " }}>
        <Routes>
          <Route path="/inmobiliaria_frontend" element={<Home />} />
          <Route
            path="/inmobiliaria_frontend/marketplace"
            element={<Marketplace />}
          />
          <Route
            path="/inmobiliaria_frontend/marketing"
            element={<Marketing />}
          />

          <Route
            path="/inmobiliaria_frontend/marketing/:id"
            element={<PropiedadDetalle />}
          />
        </Routes>
      </div>
      <InfoBottomPage />
    </>
  );
}

export default App;
