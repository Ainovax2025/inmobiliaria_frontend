import React from 'react';
import '../../styles/SCRM/KPICard.css';

const KPICard = ({ title, value, icon, description, type = 'default' }) => {
  const getIconColor = () => {
    switch (type) {
      case 'success':
        return '#4caf50';
      case 'warning':
        return '#ff9800';
      case 'danger':
        return '#f44336';
      default:
        return '#2196f3';
    }
  };

  return (
    <div className="kpi-card">
      <div className="kpi-icon" style={{ backgroundColor: getIconColor() }}>
        {icon}
      </div>
      <div className="kpi-content">
        <h3 className="kpi-title">{title}</h3>
        <p className="kpi-value">{value}</p>
        {description && <p className="kpi-description">{description}</p>}
      </div>
    </div>
  );
};

export default KPICard;