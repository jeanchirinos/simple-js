import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { regExp, regExpAll } from './regExp';

export default function Table({ matchAllChecked, code }) {
  let match, matches;

  if (!matchAllChecked) match = code.match(regExp);
  if (matchAllChecked) matches = Array.from(code.matchAll(regExpAll));

  function getHeader(match, index) {
    const token = match[0];
    const position = `${match.indices[0][0]} - ${match.indices[0][1]}`;

    return (
      <tr className="matchHeader">
        <td>{position}</td>
        <td>{token}</td>
        <td>Match {isFinite(index) && index + 1}</td>
      </tr>
    );
  }

  function getBody(match) {
    const groups = Object.entries(match.groups);

    return groups.map((group, index) => {
      const type = group[0];
      const token = group[1];
      const position = `${match.indices.groups[type][0]} - ${match.indices.groups[type][1]}`;

      return (
        <tr key={index}>
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
            <th>Posición</th>
            <th>Token</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {match && (
            <>
              {getHeader(match)}
              {getBody(match)}
            </>
          )}
          {matches?.map((match, index) => (
            <Fragment key={index}>
              {getHeader(match, index)}
              {getBody(match)}
            </Fragment>
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
      padding: 1rem 0;
    }

    .matchHeader {
      background-color: ${theme.table_background};
      color: ${theme.table_color};
      transition: background-color 0.3s, color 0.3s;
    }

    tr:nth-child(odd):not(.matchHeader) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color 0.3s;
    }
  `
);
