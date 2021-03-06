import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import regexSintactico from 'regexs/Sintactico';
import { reemplazos } from 'utilities';

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
    let nuevoCodigo = codigo;

    reemplazos.forEach(r => (nuevoCodigo = nuevoCodigo.replace(r[0], r[1])));

    setCodigoCompilado(nuevoCodigo);
  }, [codigo]);

  const infoLineas = useMemo(() => {
    const lineas = codigo.split('\n');

    let contador = 0;

    return lineas.map((linea, i) => {
      const inicio = contador;
      const fin = inicio + linea.length;

      contador = fin + 1;

      return {
        linea: i + 1,
        inicio,
        fin,
      };
    });
  }, [codigo]);

  const obtenerUbicacion = useCallback(
    posicion => {
      const ubicacion = infoLineas.find(linea => posicion <= linea.fin);

      const linea = ubicacion.linea;
      const columna = posicion - ubicacion.inicio + 1;

      return { linea, columna };
    },
    [infoLineas]
  );

  const obtenerGrupos = useCallback(() => {
    let correctos = [],
      conAdvertencia = [],
      conError = [];

    function rellenarGrupos(entrada, prevColumna = 0) {
      const matches = Array.from(entrada.matchAll(regexSintactico));

      matches.forEach(match => {
        const grupos = Object.entries(match.groups).filter(
          g => g[1] !== undefined
        );
        const indices = match.indices.groups;

        const gruposCorrectos = grupos.filter(
          g => g[0] !== 'incorrecto' && g[1]
        );

        const gruposConAdvertencia = grupos.filter(grupo => grupo[1] === '');

        const gruposConError = grupos.filter(g => g[0] === 'incorrecto');

        correctos.push(infoGrupos(gruposCorrectos, indices, prevColumna));
        conAdvertencia.push(
          infoGrupos(gruposConAdvertencia, indices, prevColumna)
        );
        conError.push(infoGrupos(gruposConError, indices, prevColumna));
      });
    }

    function infoGrupos(grupos, indices, prevColumna) {
      return grupos.map(grupo => {
        let tipo = grupo[0];
        const token = grupo[1];
        let posicion = indices[tipo][0];

        tipo = tipo.replace(/__.+/, '');
        posicion += prevColumna;

        const { linea, columna } = obtenerUbicacion(posicion);

        if (tipo === 'instruccion' && token) rellenarGrupos(token, posicion);

        return { linea, columna, tipo, token };
      });
    }

    rellenarGrupos(codigo);

    setGruposCorrectos(correctos.flat().sort((a, b) => a.linea - b.linea));
    setGruposConAdvertencia(conAdvertencia.flat());
    setGruposConError(conError.flat());
  }, [codigo, obtenerUbicacion]);

  useEffect(() => {
    compilarCodigo();
    obtenerGrupos();
  }, [compilarCodigo, obtenerGrupos]);

  const value = {
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
    obtenerUbicacion,
  };

  return <CtxCodigo.Provider value={value}>{children}</CtxCodigo.Provider>;
}
