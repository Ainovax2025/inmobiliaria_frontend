import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
import Marketplace from "./pages/marketplace/marketplace.js";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/inmobiliaria_frontend" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </>
  );
}

export default App;
