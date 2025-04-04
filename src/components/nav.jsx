import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import Login from './login.jsx'; // Importa el modal
import agentPlaceholder from '../assets/wallpapers/Agent2.jpg';
import { IoAddCircleOutline, IoHomeOutline } from 'react-icons/io5';
import { PiBuildingApartment } from 'react-icons/pi';

import '../styles/navbar.css';

function Navbar() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isBottomMenuOpen, setBottomMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser).user);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoginSuccess = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser).user);
    }
    setLoginOpen(false); // Cierra el modal después del login exitoso
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };
  return (
    <>
      {!isMobile ? (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="logo">
              <PiBuildingApartmentFill style={{ color: 'white', fontSize: '30px' }} />
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
            {user && user.rol && user.rol === 'admin' && (
              <li className="dropdown">
                <Link to="/marketplace/crearPropiedad">crear propiedad</Link>
              </li>
            )}
          </ul>

          <div className="navbar-right">
            <div className="user-menu">
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="ContainerCardLogOut">
                    <h4>{user.nombre}</h4>
                    <h5>{user.rol}</h5>
                  </div>
                  <div onClick={handleLogout}>
                    <img src={agentPlaceholder} alt="Agente John Smith" className="agentImageLogout" />
                  </div>
                  {/* <button onClick={handleLogout}>Cerrar sesión</button> */}
                </div>
              ) : (
                <button onClick={() => setLoginOpen(true)}>Ingresar</button>
              )}{' '}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar-mobile">
          <ul className="navbar-menu-mobile">
            <Link to="/">
              <li>
                <IoHomeOutline />
                <span>Inicio</span>
              </li>
            </Link>
            <li style={{ fontSize: '5vh' }} onClick={() => setBottomMenuOpen(true)}>
              <IoAddCircleOutline />
            </li>
            <Link to="/marketplace">
              <li className="dropdown">
                <PiBuildingApartment />
                <span>busca</span>
              </li>
            </Link>
          </ul>
        </nav>
      )}

      {isBottomMenuOpen && (
        <div
          className="bottom-slide-overlay"
          onClick={() => setBottomMenuOpen(false)} // clic fuera cierra el menú
        >
          <div
            className="bottom-slide-menu"
            onClick={e => e.stopPropagation()} // evita que el clic dentro cierre
          >
            <ul className="bottom-menu-list">
              <li
                onClick={() => {
                  user ? handleLogout() : setLoginOpen(true);
                  setBottomMenuOpen(false);
                }}>
                {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
              </li>
              {user && user.rol === 'admin' && (
                <>
                  <li
                    className="dropdown"
                    onClick={() => {
                      setBottomMenuOpen(false);
                    }}>
                    <Link to="/marketplace/crearPropiedad">Crear propiedad</Link>
                  </li>

                  <li className="dropdown">
                    <Link to="/marketing">Marketing</Link>
                  </li>
                </>
              )}

              {/* <li>
                <Link to="/saldo">Saldo</Link>
              </li>
              <li>
                <Link to="/qr">Mi código QR</Link>
              </li>
              <li>
                <Link to="/ajustes">Ajustes y privacidad</Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}

      <Login
        isOpen={isLoginOpen}
        onClose={() => {
          setLoginOpen(false);
          // Recargar user después del login
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default Navbar;
