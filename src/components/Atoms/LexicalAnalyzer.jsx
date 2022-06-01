import { Fragment } from 'react';
import { regexForLines } from 'regex/Lexic';
import { S_TABLE } from 'components/StyledComponents';

function Rows({ match, lineNumber }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, i) => {
    const token = group[1];
    if (!token) return <Fragment key={i}></Fragment>;

    const type = group[0];
    const posicion = match.indices.groups[type][0];
    const columna = posicion + 1;

    return (
      <tr key={i}>
        <td>{lineNumber}</td>
        <td>{columna}</td>
        <td>{token}</td>
        <td>{type}</td>
      </tr>
    );
  });
}

export default function LexicalAnalyzer({ code }) {
  const lines = code.split('\n');

  return (
    <S_TABLE>
      <thead>
        <tr>
          <th>Línea</th>
          <th>Columna</th>
          <th>Token</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, indice) => {
          const matches = Array.from(line.matchAll(regexForLines));

          return matches.map((match, i) => (
            <Rows key={i} match={match} lineNumber={indice + 1} />
          ));
        })}
      </tbody>
    </S_TABLE>
  );
}
