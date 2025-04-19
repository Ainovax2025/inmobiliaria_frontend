// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const EstadoUsuarioContext = createContext();

export const EstadoUsuarioProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser).user);
  }, []);

  const login = userData => {
    localStorage.setItem('user', JSON.stringify({ user: userData }));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return <EstadoUsuarioContext.Provider value={{ user, login, logout }}>{children}</EstadoUsuarioContext.Provider>;
};
