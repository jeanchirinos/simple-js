import useCodigo from 'hooks/useCodigo';
import regex from 'regexs/Lexico';
import Tabla from './Tabla';

export default function AnalizadorLexico() {
  const { obtenerMatches, obtenerUbicacion } = useCodigo();

  const matches = obtenerMatches(regex);

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
