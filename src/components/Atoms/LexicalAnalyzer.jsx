import { Fragment } from 'react';
import styled, { css } from 'styled-components';

const dataTypes = '(?<tipo_de_dato>int|double)';
// const curlyBraces = '(?<curly_braces>\\{\\}|\\{\\s*\\})';
const curlyBraces = '(?<llave_de_apertura>{)|(?<llave_de_cierre>})';
const reserverdWords = '(?<palabra_reservada>const|if|else|for)';
const relations = '(?<relacion><=|>=|<>|<|>|=)';
const ids = '(?<id>[a-zA-Z]+\\w*)';
// const nums = '(?<numero>\\d+\\.\\d+|^[^a]*[\\d]+[^a]*$)';
const nums = '(?<numero>\\d+\\.\\d+|\\d+)';
const literals = '"(?<literal>[^"\\s.]+)"';
const arithmetic = '(?<aritmetico>\\+|\\-|/|\\*||%)';

const regExpPattern = `${dataTypes}|${curlyBraces}|${reserverdWords}|${relations}|${ids}|${nums}|${literals}|${arithmetic}`;

const regExp = new RegExp(regExpPattern, 'dg');

export default function LexicalAnalyzer({ code }) {
  const matchesByLine = code.split('\n').map((line, index) => {
    const matches = Array.from(line.matchAll(regExp));
    const lineNumber = index + 1;

    return { lineNumber, matches };
  });

  function getRow(match, lineNumber) {
    const groups = Object.entries(match.groups);

    return groups.map((group, index) => {
      const token = group[1];

      if (!token) return <Fragment key={index}></Fragment>;

      const type = group[0];
      const position = match.indices.groups[type][0];

      return (
        <tr key={index}>
          <td>{lineNumber}</td>
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
          {matchesByLine.map((line, index) => {
            const { lineNumber, matches } = line;

            if (!matches.length) return <Fragment key={index}></Fragment>;

            return matches.map(match => getRow(match, lineNumber));
          })}
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

    tr:nth-child(even) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color 0.3s;
    }
  `
);
