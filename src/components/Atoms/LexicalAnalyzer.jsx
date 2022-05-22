import { Fragment } from 'react';
import { regexForLines, regexForBlocks } from 'regex/Lexic';
import { S_TABLE } from 'components/StyledComponents';

function Rows({ match, lineNumber }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, index) => {
    const token = group[1];
    if (!token) return <Fragment key={index}></Fragment>;

    const type = group[0],
      position = match.indices.groups[type][0];

    const isABlockHeader = lineNumber === '-' && token === match[0],
      className = isABlockHeader ? 'matchHeader' : '';

    return (
      <tr key={index} className={className}>
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
  const blockMatches = Array.from(code.matchAll(regexForBlocks));

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
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const matches = Array.from(line.matchAll(regexForLines));

          return matches.map((match, index) => (
            <Rows key={index} match={match} lineNumber={lineNumber} />
          ));
        })}

        {blockMatches.map((match, index) => (
          <Rows key={index} match={match} lineNumber="-" />
        ))}
      </tbody>
    </S_TABLE>
  );
}
