// Pors.jsx
import React from 'react';
import '../../styles/SCRM/pors.css';

const Pors = () => {
  const metrics = [
    { label: 'Meta', value: 70 },
    { label: 'Cumplimiento', value: 45 },
    { label: 'Participación', value: 80 },
    { label: 'Satisfacción', value: 90 },
  ];

  const getBarColor = (value) => {
    if (value < 50) return '#f44336';      // Rojo
    if (value < 75) return '#ff9800';      // Naranja
    return '#4caf50';                      // Verde
  };

  return (
    <div className="pors-container">
      <h3 className="pors-title">Porcentajes</h3>
      {metrics.map((metric, index) => (
        <div key={index} className="pors-item">
          <span className="pors-label">{metric.label}</span>
          <div className="pors-bar-background">
            <div
              className="pors-bar-fill"
              style={{
                width: `${metric.value}%`,
                backgroundColor: getBarColor(metric.value)
              }}
            ></div>
          </div>
          <span className="pors-value">{metric.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default Pors;
