import { CtxCodigo } from 'context/CtxCodigo';
import { useContext, useEffect } from 'react';
// import regex from 'regexs/Sintactico';

export default function useCodigo() {
  const {
    codigo,
    // setGruposCorrectos,
    // setGruposConAdvertencia,
    // setGruposConError,
  } = useContext(CtxCodigo);

  const obtenerMatches = regex2 => Array.from(codigo.matchAll(regex2));
  // const obtenerMatches2 = codigo2 => Array.from(codigo2.matchAll(regex));
  // const matches = obtenerMatches(regex);

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

  // let correctos = [];
  // let conAdvertencia = [];
  // let conError = [];

  // function obtenerGrupos(instruccion) {
  //   let matches2 = matches;

  //   if (instruccion) {
  //     matches2 = obtenerMatches2(instruccion);
  //   }

  //   matches2.forEach(match => {
  //     const grupos = Object.entries(match.groups);
  //     const indices = match.indices.groups;

  //     const gruposCorrectos2 = grupos.filter(
  //       grupo => grupo[0] !== 'incorrecto' && grupo[1]
  //     );

  //     const gruposConAdvertencia2 = grupos.filter(grupo => grupo[1] === '');

  //     const gruposConError2 = grupos.filter(
  //       grupo => grupo[0] === 'incorrecto' && grupo[1]
  //     );

  //     correctos.push(infoGrupos(gruposCorrectos2, indices));
  //     conAdvertencia.push(infoGrupos(gruposConAdvertencia2, indices));
  //     conError.push(infoGrupos(gruposConError2, indices));
  //   });

  //   return {
  //     correctos2: correctos,
  //     conAdvertencia2: conAdvertencia,
  //     conError2: conError,
  //   };
  // }

  // function infoGrupos(grupos, indices) {
  //   return grupos.map(grupo => {
  //     const tipo = grupo[0];

  //     const token = grupo[1];

  //     const posicion = indices[tipo][0];
  //     const { linea, columna } = obtenerUbicacion(posicion);

  //     if (tipo === 'instruccion' && token !== '') {
  //       obtenerGrupos(token);
  //     }

  //     return { linea, columna, tipo, token };
  //   });
  // }

  useEffect(
    () => {
      // const { correctos2, conAdvertencia2, conError2 } = obtenerGrupos();
      // const gruposCorrectos = correctos2.flat();
      // const gruposConAdvertencia = conAdvertencia2.flat();
      // const gruposConError = conError2.flat();
      // setGruposCorrectos(gruposCorrectos);
      // setGruposConAdvertencia(gruposConAdvertencia);
      // setGruposConError(gruposConError);
    },
    [
      // obtenerGrupos,
      // setGruposCorrectos,
      // setGruposConAdvertencia,
      // setGruposConError,
    ]
  );

  return {
    obtenerMatches,
    obtenerUbicacion,
  };
}