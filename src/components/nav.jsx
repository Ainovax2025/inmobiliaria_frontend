import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiBuildingApartmentFill, PiBuildingApartment } from 'react-icons/pi';
import { IoAddCircleOutline, IoHomeOutline } from 'react-icons/io5';
import Login from './login.jsx';
import agentPlaceholder from '../assets/wallpapers/Agent2.jpg';
import '../styles/navbar.css';
import { EstadoUsuarioContext } from './estadoUsuarioActivo';
import { MdDashboard } from 'react-icons/md';

function Navbar() {
  const { user, logout } = useContext(EstadoUsuarioContext);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isBottomMenuOpen, setBottomMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

            <li>
              <Link to="/crm">CRM</Link>
            </li>

            {/* 👉 Mostrar solo si el usuario es admin */}
            {user?.rol === 'admin' && (
              <>
                <li>
                  <Link to="/marketplace/crearPropiedad">Crear propiedad</Link>
                </li>
                <li>
                  <Link to="/marketing">Marketing</Link>
                </li>
              </>
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
                  <div onClick={logout}>
                    <img src={agentPlaceholder} alt="Agente" className="agentImageLogout" />
                  </div>
                </div>
              ) : (
                <button onClick={() => setLoginOpen(true)}>Ingresar</button>
              )}
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
              <li>
                <PiBuildingApartment />
                <span>Busca</span>
              </li>
            </Link>
            <Link to="/crm">
              <li>
                <MdDashboard />
                <span>CRM</span>
              </li>
            </Link>
          </ul>
        </nav>
      )}

      {isBottomMenuOpen && (
        <div className="bottom-slide-overlay" onClick={() => setBottomMenuOpen(false)}>
          <div className="bottom-slide-menu" onClick={e => e.stopPropagation()}>
            <ul className="bottom-menu-list">
              <li
                onClick={() => {
                  user ? logout() : setLoginOpen(true);
                  setBottomMenuOpen(false);
                }}>
                {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
              </li>

              {/* Admin solo si está logueado como tal */}
              {user?.rol === 'admin' && (
                <>
                  <li onClick={() => setBottomMenuOpen(false)}>
                    <Link to="/marketplace/crearPropiedad">Crear propiedad</Link>
                  </li>
                  <li onClick={() => setBottomMenuOpen(false)}>
                    <Link to="/marketing">Marketing</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Modal Login */}
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Navbar;
