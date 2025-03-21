import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBuildingApartmentFill } from "react-icons/pi";
import Login from "./login.jsx"; // Importa el modal

import "../styles/navbar.css";

function Navbar() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <PiBuildingApartmentFill
              style={{ color: "white", fontSize: "30px" }}
            />
            <span className="logo-text">MP Inmobiliaria</span>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/marketplace">Propiedades</Link>
          </li>
          <li className="dropdown">
            <Link to="/marketing">Marketing</Link>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="user-menu">
            <button onClick={() => setLoginOpen(true)}>Ingresar</button>
          </div>
        </div>
      </nav>
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Navbar;
