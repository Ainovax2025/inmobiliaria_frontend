// eslint-disable-next-line no-unused-vars
import style from './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import CsrfProvider from './components/csrf';
import { EstadoUsuarioProvider } from './components/estadoUsuarioActivo'; // Importa el contexto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <CsrfProvider>
      <EstadoUsuarioProvider>
        <App />
      </EstadoUsuarioProvider>
    </CsrfProvider>
  </HashRouter>
);
