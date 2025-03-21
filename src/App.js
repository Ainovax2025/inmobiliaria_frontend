import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
import Marketplace from "./pages/marketplace/marketplace.js";
import PropiedadDetalle from "./pages/marketplace/propiedadDetalle.js";
import Footer from "./components/footer.jsx";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "50px", minHeight: "100dvh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/marketing/:id" element={<PropiedadDetalle />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
