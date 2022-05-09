import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { regExpPerLine, regExpMultiline } from './regExp';

export default function LexicalAnalyzer({ code }) {
  const matchesByLine = code.split('\n').map((line, index) => {
    const matches = Array.from(line.matchAll(regExpPerLine));
    const lineNumber = index + 1;

    return { lineNumber, matches };
  });

  const matchesByBlock = Array.from(code.matchAll(regExpMultiline));

  function getRows(match, lineNumber, isABlock) {
    const groups = Object.entries(match.groups);

    return groups.map((group, index) => {
      const token = group[1];

      const isABlockHeader = isABlock && token === match[0];

      const className = isABlockHeader ? 'matchHeader' : '';

      if (!token) return <Fragment key={index}></Fragment>;

      const type = group[0];
      const position = match.indices.groups[type][0];

      return (
        <tr key={index} className={className}>
          <td>{lineNumber || '-'}</td>
          <td>{position}</td>
          <td>{token}</td>
          <td>{type}</td>
        </tr>
      );
    });
  }

  return (
    <div className="table-container">
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
            line.matches?.map(match => getRows(match, line.lineNumber))
          )}
          {matchesByBlock.map((match, index) => (
            <Fragment key={index}>{getRows(match, null, true)}</Fragment>
          ))}
        </tbody>
      </S_TABLE>
    </div>
  );
}

const S_TABLE = styled.table(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
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

    .matchHeader {
      background-color: ${theme.table_background};
      color: ${theme.table_color};
      transition: background-color 0.3s, color 0.3s;
    }

    tr:nth-child(even):not(.matchHeader) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color 0.3s;
    }
  `
);
