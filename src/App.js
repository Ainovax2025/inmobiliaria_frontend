import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
// import Marketplace from "./pages/marketing_automatization/Marketing";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </>
  );
}

export default App;
