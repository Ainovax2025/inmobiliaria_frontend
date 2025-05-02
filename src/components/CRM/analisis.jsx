import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../../styles/SCRM/analisis.css';
import Comp from '../CRM/comp.jsx';
import Pors from '../CRM/pors.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analisis = () => {
  const allDatasets = [
    {
      label: 'Total',
      color: 'rgba(75, 192, 192, 1)',
      background: 'rgba(75, 192, 192, 0.2)',
      data: [100, 200, 150, 300, 250, 400],
    },
    {
      label: 'combersasiones que no llegaron a nada',
      color: 'rgba(255, 99, 132, 1)',
      background: 'rgba(255, 99, 132, 0.2)',
      data: [120, 220, 180, 320, 280, 420],
    },
    {
      label: 'Ventas Año Anterior',
      color: 'rgba(54, 162, 235, 1)',
      background: 'rgba(54, 162, 235, 0.2)',
      data: [90, 180, 130, 250, 240, 380],
    },
    {
      label: 'Leads Generados',
      color: 'rgba(255, 206, 86, 1)',
      background: 'rgba(255, 206, 86, 0.2)',
      data: [300, 350, 320, 400, 380, 450],
    },
    {
      label: 'Seguimientos Realizados',
      color: 'rgba(153, 102, 255, 1)',
      background: 'rgba(153, 102, 255, 0.2)',
      data: [200, 240, 230, 280, 300, 310],
    },
  ];

  const visibleByDefault = 'Total';

  const [visibleCurves, setVisibleCurves] = useState(
    allDatasets.reduce((acc, dataset) => {
      acc[dataset.label] = dataset.label === visibleByDefault;
      return acc;
    }, {})
  );

  const toggleCurve = (label) => {
    if (label === visibleByDefault) return;
    setVisibleCurves((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: allDatasets
      .filter((ds) => visibleCurves[ds.label])
      .map((ds) => ({
        label: ds.label,
        data: ds.data,
        borderColor: ds.color,
        backgroundColor: ds.background,
        fill: false,
        tension: 0.4,
      })),
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Análisis Completo de CRM (Enero - Junio)',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad / Ventas en USD',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analisis-content">
        <p className="analisis-title">
        Análisis de datos
        </p>
        <p className="analisis-description">
          Aquí podrás ver el análisis de datos y reportes detallados sobre las interacciones con los clientes, tendencias de ventas y más.
        </p>

        <Comp valorActual={750} valorIdeal={1000} satisfaccion={82} />

        <div style={{ marginBottom: '20px' }}>
          {allDatasets.map((ds) => (
            <button
              key={ds.label}
              onClick={() => toggleCurve(ds.label)}
              style={{
                margin: '5px',
                backgroundColor: visibleCurves[ds.label] ? ds.color : '#9b9a9a',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '4px',
                cursor: ds.label === visibleByDefault ? 'not-allowed' : 'pointer',
                opacity: ds.label === visibleByDefault ? 0.6 : 1,
              }}
              disabled={ds.label === visibleByDefault}
              title={ds.label === visibleByDefault ? 'Siempre visible' : ''}
            >
              {ds.label}
            </button>
          ))}
        </div>

        {/* NUEVO CONTENEDOR FLEXIBLE */}
        <div className="analisis-flex">
          <div className="analisis-chart">
            <h3>Gráfico de Tendencias y Métricas</h3>
            <Line data={data} options={options} />
          </div>
        <Pors />
      </div>
    </div>
    
  );
};

export default Analisis;
