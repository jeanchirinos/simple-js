import { Fragment } from 'react';
import styled, { css } from 'styled-components';

// const regExpIf =
//   '(?<palabra_reservada>if)(?<inicio_condicion>\\()(?<condicion>.+)(?<fin_condicion>\\))\\s(?<inicio_bloque>{)\\n(?<instruccion>.+);\\n(?<fin_bloque>})';
// const regExpFor = '(?<palabra_reservada_for>for)\\s*\\((?<condicion_for>.+)\\)';

// const regExpPattern =
//   `${regExpIf}|${regExpFor}`;

const regExpPattern = `(?<palabra_reservada>if|for)|"(?<literal>[^"\\s.]+)"`;

// separated ? line by line

const regExpAll = new RegExp(regExpPattern, 'dg');

export default function LexicalAnalyzer({ code }) {
  const matchesByLine = code.split('\n').map((line, index) => {
    const matches = Array.from(line.matchAll(regExpAll));
    const lineNumber = index + 1;

    return { lineNumber, matches };
  });

  // console.log(matchesByLine);

  // const matches = Array.from(code.matchAll(regExpAll));

  // function getHeader(match, index) {
  //   const token = match[0];
  //   const position = `${match.indices[0][0]} - ${match.indices[0][1]}`;

  //   return (
  //     <tr className="matchHeader">
  //       <td>{position}</td>
  //       <td>{token}</td>
  //       <td>{index + 1}</td>
  //     </tr>
  //   );
  // }

  function getBody(match, lineNumber) {
    const groups = Object.entries(match.groups);

    return groups.map((group, index) => {
      const token = group[1];

      if (!token) return <Fragment key={index}></Fragment>;

      const type = group[0];
      // const position = `${match.indices.groups[type][0]} - ${match.indices.groups[type][1]}`;
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

            return matches.map(match => getBody(match, lineNumber));
          })}

          {/* {matches?.map((match, index) => (
            <Fragment key={index}>
              {getHeader(match, index)}
              {getBody(match)}
            </Fragment>
          ))} */}
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

    tr:nth-child(even) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color 0.3s;
    }
  `
);
