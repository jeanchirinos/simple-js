import { Fragment } from 'react';
import { regexForBlocks } from 'regex/Lexic';
import { S_TABLE } from 'components/StyledComponents';

function Rows({ match }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, i) => {
    const token = group[1];
    if (!token) return <Fragment key={i}></Fragment>;

    const type = group[0],
      position = match.indices.groups[type][0];

    const isABlockHeader = token === match[0],
      className = isABlockHeader ? 'matchHeader' : '';

    return (
      <tr key={i} className={className}>
        {/* <td>-</td> */}
        <td>{position}</td>
        <td>{token}</td>
        <td>{type}</td>
      </tr>
    );
  });
}

export default function AnalizadorSintactico({ code }) {
  const blockMatches = Array.from(code.matchAll(regexForBlocks));

  return (
    <S_TABLE>
      <thead>
        <tr>
          {/* <th>Línea</th> */}
          <th>Posición</th>
          <th>Token</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {blockMatches.map((match, i) => (
          <Rows key={i} match={match} lineNumber="-" />
        ))}
      </tbody>
    </S_TABLE>
  );
}
