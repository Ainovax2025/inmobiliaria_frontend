import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SCRM/CRM.css';

const CRM = () => {
  return (
    <div className="crm-container">
      <h1 className="crm-title">CRM</h1>

      <nav>
        <ul className="crm-nav-menu">
          <li className="crm-nav-item">
            <Link to="/crm/citas" className="crm-link">Citas</Link>
          </li>
          <li className="crm-nav-item">
            <Link to="/crm/analisis" className="crm-link">Análisis</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CRM;
