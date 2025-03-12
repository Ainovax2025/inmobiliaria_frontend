import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaStore, FaBullhorn } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <PiBuildingApartmentFill style={{color :'blue', fontSize:'30px'}} />
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
          <Link to="/marketplace">
            <FaStore /> Marketplace
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/marketing">
            <FaBullhorn /> Marketing
          </Link>
        </li>
      </ul>
      
      <div className="navbar-right">
        <div className="user-menu">
          <RiUser3Line style={{fontSize:'20px', border:'1px solid', padding:'5px', borderRadius:'50%'}} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;