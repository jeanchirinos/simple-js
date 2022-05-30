import { Fragment } from 'react';
import { numero2 } from './regexs';
import { BOX, S_TABLE } from 'components/StyledComponents';

function Rows({ match, code }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, i) => {
    const token = group[1];
    if (!token) return <Fragment key={i}></Fragment>;

    const tipo = group[0],
      position = match.indices.groups[tipo][0];

    const isABlockHeader = token === match[0] && tipo.startsWith('B_'),
      className = isABlockHeader ? 'matchHeader' : '';

    const lineas = code.split('\n');
    const tamanioLineas = {};

    //
    let contador = 0;

    lineas.forEach((linea, i) => {
      tamanioLineas[i + 1] = { inicio: contador, fin: contador + linea.length };
      contador += linea.length + 1;
    });

    const encontrado = Object.entries(tamanioLineas).find(
      linea => linea[1].inicio <= position && linea[1].fin >= position
    );

    const numeroDeLinea = encontrado[0];
    //

    return (
      <tr key={i} className={className}>
        <td>{numeroDeLinea}</td>
        <td>{position}</td>
        <td>{token}</td>
        <td>{tipo}</td>
      </tr>
    );
  });
}

export default function Analisis({ code }) {
  const blockMatches = Array.from(code.matchAll(numero2));

  return (
    <BOX style={{ overflow: 'auto' }}>
      <S_TABLE>
        <thead>
          <tr>
            <th>Línea</th>
            <th>Posición</th>
            <th>Token</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {blockMatches.map((match, i) => (
            <Rows key={i} match={match} code={code} />
          ))}
        </tbody>
      </S_TABLE>
    </BOX>
  );
}
