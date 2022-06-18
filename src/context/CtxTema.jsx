import { createContext, useLayoutEffect, useState } from 'react';

export const CtxTema = createContext();

export default function ContextoTema({ children }) {
  const [temaOscuro, setTemaOscuro] = useState(undefined);

  useLayoutEffect(() => {
    obtenerTema();
    window.onload = () => document.body.classList.add('con-transicion');
  }, []);

  function obtenerTema() {
    if (localStorage.temaOscuro) {
      const temaOscuroLocal = JSON.parse(localStorage.temaOscuro);
      setTemaOscuro(temaOscuroLocal);
    } else {
      setTemaOscuro(true);
      localStorage.temaOscuro = true;
    }
  }

  function cambiarTema() {
    localStorage.temaOscuro = !temaOscuro;
    setTemaOscuro(!temaOscuro);
  }

  return (
    <CtxTema.Provider value={{ temaOscuro, cambiarTema }}>
      {children}
    </CtxTema.Provider>
  );
}
