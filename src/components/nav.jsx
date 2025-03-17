import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaStore, FaBullhorn } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <PiBuildingApartmentFill style={{color :'white', fontSize:'30px'}} />
          <span className="logo-text">MP Inmobiliaria</span>
        </Link>
      </div>
      
      <ul className="navbar-menu">
        <li>
          <Link to="/inmobiliaria_frontend">
            <FaHome /> Home
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/inmobiliaria_frontend/marketplace">
            <FaStore /> Marketplace
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/inmobiliaria_frontend/marketing">
            <FaBullhorn /> Marketing
          </Link>
        </li>
      </ul>
      
      <div className="navbar-right">
        <div className="user-menu">
          <button>
              Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;