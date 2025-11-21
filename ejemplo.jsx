'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistroFormManual() {
  // 💾 Estados para las contraseñas y el mensaje de error
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  
  const handleSubmit = (e) => {

    e.preventDefault(); 
    setError(null); 

    if (password !== confirmPassword) {
      setError('❌ ¡Las contraseñas NO son idénticas! Verifícalo.');
      return; 
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    console.log('✅ Datos Válidos. Preparado para enviar al servidor.');
    router.push('/login');
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* 🔐 Campo Contraseña */}
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Campo obligatorio
          minLength={8} // Mínimo de caracteres (Validación HTML5)
          // title podría ser usado por el navegador para el mensaje de error
          title="Mínimo 8 caracteres"
        />
      </div>

      {/* 🔒 Campo Confirmación de Contraseña */}
      <div>
        <label htmlFor="confirmPassword">Repetir Contraseña</label>
        <input
          id="confirmPassword"
          type="password"
          // Manejo del estado
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      
      {/* 🚨 Mensaje de Error (si existe) */}
      {error && (
        <p className="text-red-500 font-bold p-2 bg-red-100 rounded">
          {error}
        </p>
      )}

      <button 
        type="submit" 
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Registrar
      </button>
    </form>
  );
}