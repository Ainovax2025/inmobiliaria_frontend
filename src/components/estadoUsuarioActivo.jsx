// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const EstadoUsuarioContext = createContext();

export const EstadoUsuarioProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = userData => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return <EstadoUsuarioContext.Provider value={{ user, login, logout }}>{children}</EstadoUsuarioContext.Provider>;
};
