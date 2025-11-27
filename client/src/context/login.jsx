// context/LoginContext.js
'use client'; // 👈 OBLIGATORIO: El estado usa hooks de React, así que es Client Side.

import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto (el "canal" de comunicación)
const LoginContext = createContext();

// 2. Crear el Provider (el componente que envuelve a los demás)
export function LoginProvider({ children }) {

  const [islogin, setIsLogin] = useState(true)

  // Todo lo que pongas en 'value' será accesible por los hijos
  return (
    <LoginContext.Provider value={{ islogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

// 3. Crear un Hook personalizado (Best Practice para no importar el contexto crudo)
export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin debe usarse dentro de un LoginProvider');
  }
  return context;
}