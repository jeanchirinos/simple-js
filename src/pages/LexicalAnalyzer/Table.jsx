import { BOX, S_TABLE } from 'components/StyledComponents';
import { regExp, regExpAll } from './regExp';

function Rows({ match }) {
  const groups = Object.entries(match.groups);

  return groups.map((group, index) => {
    const type = group[0],
      token = group[1],
      position = match.indices.groups[type][0];

    const isABlockHeader = token === match[0],
      className = isABlockHeader ? 'matchHeader' : '';

    return (
      <tr key={index} className={className}>
        <td>{position}</td>
        <td>{token}</td>
        <td>{type}</td>
      </tr>
    );
  });
}

export default function Table({ code, matchAllChecked }) {
  let match, matches;

  if (!matchAllChecked) match = code.match(regExp);
  if (matchAllChecked) matches = Array.from(code.matchAll(regExpAll));

  return (
    <BOX style={{ overflow: 'auto' }}>
      <S_TABLE style={{ minHeight: '100%' }}>
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
