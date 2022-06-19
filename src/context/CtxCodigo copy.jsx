import { createContext, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import regexSintactico from 'regexs/Sintactico';

export const CtxCodigo = createContext();

export default function ContextoCodigo({ children }) {
  const codigoInicial = `num miNumero = 5;\ntxt miTexto = "Hola";\n\nfunc hola(){\n  num adios = 8;\n}`;

  const [codigo, setCodigo] = useState(codigoInicial);
  const [codigoCompilado, setCodigoCompilado] = useState(codigo);

  const [gruposCorrectos, setGruposCorrectos] = useState([]);
  const [gruposConAdvertencia, setGruposConAdvertencia] = useState([]);
  const [gruposConError, setGruposConError] = useState([]);

  function borrarCodigo() {
    if (!codigo) return;

    setCodigo('');
    setCodigoCompilado('');
    toast('Código borrado', { icon: '🧹' });
  }

  const compilarCodigo = useCallback(() => {
    const codigoCompilado = codigo.replace(/func/g, 'function');
    setCodigoCompilado(codigoCompilado);
  }, [codigo]);

  const infoLineas = useCallback(() => {
    let lineas = codigo.split('\n');

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
  }, [codigo]);

  const obtenerUbicacion = useCallback(
    posicion => {
      const ubicacion = infoLineas().find(
        linea => linea.inicio <= posicion && linea.fin >= posicion
      );

      if (!ubicacion) return { linea: 0, columna: 0 };

      const linea = ubicacion.linea;
      const columna = posicion - ubicacion.inicio + 1;

      return { linea, columna };
    },
    [infoLineas]
  );

  const obtenerGrupos0 = useCallback(() => {
    let correctos = [];
    let conAdvertencia = [];
    let conError = [];

    const obtenerMatches = regex2 => Array.from(codigo.matchAll(regex2));
    const obtenerMatches2 = codigo2 =>
      Array.from(codigo2.matchAll(regexSintactico));

    const matches = obtenerMatches(regexSintactico);

    function obtenerGrupos(instruccion) {
      let matches2 = matches;

      if (instruccion) {
        matches2 = obtenerMatches2(instruccion);
      }

      matches2.forEach(match => {
        const grupos = Object.entries(match.groups);
        const indices = match.indices.groups;

        const gruposCorrectos2 = grupos.filter(
          grupo => grupo[0] !== 'incorrecto' && grupo[1]
        );

        const gruposConAdvertencia2 = grupos.filter(grupo => grupo[1] === '');

        const gruposConError2 = grupos.filter(
          grupo => grupo[0] === 'incorrecto' && grupo[1]
        );

        correctos.push(infoGrupos(gruposCorrectos2, indices));
        conAdvertencia.push(infoGrupos(gruposConAdvertencia2, indices));
        conError.push(infoGrupos(gruposConError2, indices));
      });
    }

    obtenerGrupos();

    function infoGrupos(grupos, indices) {
      return grupos.map(grupo => {
        const tipo = grupo[0];

        const token = grupo[1];

        const posicion = indices[tipo][0];

        const { linea, columna } = obtenerUbicacion(posicion);

        if (tipo === 'instruccion' && token !== '') {
          obtenerGrupos(token);
        }

        return { linea, columna, tipo, token };
      });
    }

    return {
      correctos2: correctos,
      conAdvertencia2: conAdvertencia,
      conError2: conError,
    };
  }, [codigo, obtenerUbicacion]);

  useEffect(() => {
    compilarCodigo();
    infoLineas();
    obtenerGrupos0();

    const { correctos2, conAdvertencia2, conError2 } = obtenerGrupos0();

    const gruposCorrectos = correctos2.flat();
    const gruposConAdvertencia = conAdvertencia2.flat();
    const gruposConError = conError2.flat();
    setGruposCorrectos(gruposCorrectos);
    setGruposConAdvertencia(gruposConAdvertencia);
    setGruposConError(gruposConError);
  }, [infoLineas, compilarCodigo, obtenerGrupos0]);

  return (
    <CtxCodigo.Provider
      value={{
        codigo,
        setCodigo,
        codigoCompilado,
        setCodigoCompilado,
        borrarCodigo,
        gruposCorrectos,
        gruposConAdvertencia,
        gruposConError,
        setGruposCorrectos,
        setGruposConAdvertencia,
        setGruposConError,
      }}
    >
      {children}
    </CtxCodigo.Provider>
  );
}
