// src/context/CsrfContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const CsrfContext = createContext();
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
console.log(BASE_URL);

const CsrfProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${BASE_URL}/csrf-token`); // ya no es necesario credentials: 'include'
        if (!response.ok) {
          throw new Error('No se pudo obtener el token CSRF');
        }
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error('Error al obtener el CSRF token:', error);
      }
    };

    if (!csrfToken) {
      fetchCsrfToken();
    }
  }, [csrfToken]);

  return <CsrfContext.Provider value={csrfToken}>{children}</CsrfContext.Provider>;
};

export const useCsrfToken = () => useContext(CsrfContext);

export default CsrfProvider;
