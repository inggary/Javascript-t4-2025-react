'use client';

import { useState } from "react";

export default function Home() {

  var [numero, setNumero] = useState(0);

  const Contador = () => {
    setNumero(numero+1);
    console.log(numero);
  }

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <p>Numero de clicks: {numero}</p>
      <button 
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md" 
      onClick={Contador}
      >
        Contar
        </button>
    </div>
  );
}
