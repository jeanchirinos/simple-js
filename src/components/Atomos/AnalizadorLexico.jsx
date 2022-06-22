import { CtxCodigo } from 'context/CtxCodigo';
import { useContext } from 'react';
import regexLexico from 'regexs/Lexico';
import Tabla from './Tabla';

export default function AnalizadorLexico() {
  const { codigo, obtenerUbicacion } = useContext(CtxCodigo);

  const matches = Array.from(codigo.matchAll(regexLexico));

  return (
    <Tabla>
      {matches.map((match, i) => {
        const grupos = Object.entries(match.groups);
        const grupo = grupos.find(grupo => grupo[1]);

        const posicion = match.index;
        const { linea, columna } = obtenerUbicacion(posicion);
        const tipo = grupo[0];
        const token = grupo[1];

        return (
          <tr key={i}>
            <td>{linea}</td>
            <td>{columna}</td>
            <td>{tipo}</td>
            <td>{token}</td>
          </tr>
        );
      })}
    </Tabla>
  );
}
