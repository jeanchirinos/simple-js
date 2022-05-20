import { BOX } from 'components/StyledComponents';
import styled, { css } from 'styled-components';
import { regExp, regExpAll } from './regExp';

function Rows({ match }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, index) => {
    const type = group[0],
      token = group[1],
      position = match.indices.groups[type][0];

    const isARowHeader = token === match[0],
      className = isARowHeader ? 'matchHeader' : '';

    return (
      <tr key={index} className={className}>
        <td>{position}</td>
        <td>{token}</td>
        <td>{type}</td>
      </tr>
    );
  });
}

export default function Table({ matchAllChecked, code }) {
  let match, matches;

  if (!matchAllChecked) match = code.match(regExp);
  if (matchAllChecked) matches = Array.from(code.matchAll(regExpAll));

  return (
    <BOX style={{ overflow: 'auto', backgroundColor: 'transparent' }}>
      <S_TABLE>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Token</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {match && <Rows match={match} />}
          {matches?.map(match => (
            <Rows match={match} />
          ))}
        </tbody>
      </S_TABLE>
    </BOX>
  );
}

const S_TABLE = styled.table(
  ({ theme }) => css`
    width: 100%;
    min-height: 100%;
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

    tr:nth-child(odd):not(.matchHeader) {
      background-color: ${theme.secondary};
    }

    thead,
    tr {
      transition: background-color var(--transition-t);
    }
  `
);
