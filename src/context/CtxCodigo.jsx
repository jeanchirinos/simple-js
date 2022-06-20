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
    toast('Código borrado', { icon: '🧹' });
  }

  const compilarCodigo = useCallback(() => {
    const codigoCompilado = codigo.replace(/func/g, 'function');
    setCodigoCompilado(codigoCompilado);
  }, [codigo]);

  const infoLineas = useCallback(() => {
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
    let correctos = [],
      conAdvertencia = [],
      conError = [];

    function obtenerGrupos(codigo, linea, columna) {
      const matches = Array.from(codigo.matchAll(regexSintactico));

      matches.forEach(match => {
        const grupos = Object.entries(match.groups);
        const indices = match.indices.groups;

        const gruposCorrectos = grupos.filter(
          grupo => grupo[0] !== 'incorrecto' && grupo[1]
        );

        const gruposConAdvertencia = grupos.filter(grupo => grupo[1] === '');

        const gruposConError = grupos.filter(
          grupo => grupo[0] === 'incorrecto' && grupo[1]
        );

        correctos.push(infoGrupos(gruposCorrectos, indices, linea, columna));
        conAdvertencia.push(
          infoGrupos(gruposConAdvertencia, indices, linea, columna)
        );
        conError.push(infoGrupos(gruposConError, indices, linea, columna));
      });
    }

    function infoGrupos(grupos, indices, prevLinea, prevColumna) {
      return grupos.map(grupo => {
        const tipo = grupo[0];
        const token = grupo[1];
        let posicion = indices[tipo][0];

        posicion = prevColumna + posicion;

        const { linea, columna } = obtenerUbicacion(posicion, prevLinea);

        if (tipo === 'instruccion' && token !== '') {
          const nuevoToken = token.split('\n').filter(Boolean).join('\n');
          obtenerGrupos(nuevoToken, linea, posicion + 1);
        }

        return { linea, columna, tipo, token };
      });
    }

    obtenerGrupos(codigo, 0, 0);

    setGruposCorrectos(correctos.flat().sort((a, b) => a.linea - b.linea));
    setGruposConAdvertencia(conAdvertencia.flat());
    setGruposConError(conError.flat());
  }, [codigo, obtenerUbicacion]);

  useEffect(() => {
    compilarCodigo();
    obtenerGrupos0();
  }, [compilarCodigo, obtenerGrupos0]);

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
