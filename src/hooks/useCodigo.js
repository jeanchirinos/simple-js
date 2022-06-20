import { CtxCodigo } from 'context/CtxCodigo';
import { useContext } from 'react';

export default function useCodigo() {
  const { codigo } = useContext(CtxCodigo);

  const obtenerMatches = regex2 => Array.from(codigo.matchAll(regex2));

  function infoLineas() {
    const lineas = codigo.split('\n');

    const datos = [];
    let contador = 0;

    lineas.forEach((linea, i) => {
      datos.push({
        linea: i + 1,
        inicio: contador,
        fin: contador + linea.length,
      });
      contador += linea.length + 1;
    });

    return datos;
  }

  function obtenerUbicacion(posicion) {
    const ubicacion = infoLineas().find(
      linea => linea.inicio <= posicion && linea.fin >= posicion
    );

    const linea = ubicacion.linea;
    const columna = posicion - ubicacion.inicio + 1;

    return { linea, columna };
  }

  return {
    obtenerMatches,
    obtenerUbicacion,
  };
}
