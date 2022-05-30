import { Fragment } from 'react';
import { regexForLines } from 'regex/Lexic';
import { S_TABLE } from 'components/StyledComponents';

function Rows({ match, lineNumber }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, i) => {
    const token = group[1];
    if (!token) return <Fragment key={i}></Fragment>;

    const type = group[0],
      position = match.indices.groups[type][0];

    return (
      <tr key={i}>
        <td>{lineNumber}</td>
        <td>{position}</td>
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
          <th>Posición</th>
          <th>Token</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, i) => {
          const lineNumber = i + 1;
          const matches = Array.from(line.matchAll(regexForLines));

          return matches.map((match, i) => (
            <Rows key={i} match={match} lineNumber={lineNumber} />
          ));
        })}
      </tbody>
    </S_TABLE>
  );
}
