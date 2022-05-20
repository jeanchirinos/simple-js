import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { regExpPerLine, regExpMultiline } from 'regexp/Lexic';

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

  const matchesByLine = lines.map((line, index) => {
    const lineNumber = index + 1,
      matches = Array.from(line.matchAll(regExpPerLine));

    return { lineNumber, matches };
  });

  const matchesByBlock = Array.from(code.matchAll(regExpMultiline));

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
        {matchesByLine.map(line =>
          line.matches.map(match => (
            <Rows match={match} lineNumber={line.lineNumber} />
          ))
        )}
        {matchesByBlock.map(match => (
          <Rows match={match} lineNumber="-" />
        ))}
      </tbody>
    </S_TABLE>
  );
}

const S_TABLE = styled.table(
  ({ theme }) => css`
    width: 100%;
    border-spacing: 0;
    font-size: 14px;
    text-align: center;

    thead {
      background-color: ${theme.secondary};
      color: ${theme.font_light};
    }

    th {
      padding: 1rem 0.8rem;
    }

    tr.matchHeader {
      background-color: ${theme.table_background};
      color: ${theme.table_color};
    }

    tr:nth-child(even):not(.matchHeader) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color var(--transition-t);
    }
  `
);
