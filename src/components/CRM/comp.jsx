import React from 'react';
import '../../styles/SCRM/comp.css';

const Comp = ({ valorActual, valorIdeal, satisfaccion }) => {
  const porcentaje = Math.min((valorActual / valorIdeal) * 100, 100);

  return (
    <div className="resumen-container">
      <div className="circle-progress">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${porcentaje}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            {`${Math.round(porcentaje)}%`}
          </text>
        </svg>
        <p className="label">Progreso Total vs Ideal</p>
      </div>

      <div className="satisfaccion-box">
        <h4>Satisfacción del Cliente</h4>
        <p className="emoji">{satisfaccion >= 80 ? '😄' : satisfaccion >= 60 ? '😐' : '😞'}</p>
        <p className="porcentaje">{satisfaccion}%</p>
      </div>
    </div>
  );
};

export default Comp;
