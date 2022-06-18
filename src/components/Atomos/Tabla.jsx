import { S_TABLA } from 'components/StyledComponents';

export default function Tabla({ children }) {
  return (
    <S_TABLA>
      <thead>
        <tr>
          <th>Línea</th>
          <th>Columna</th>
          <th>Tipo</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </S_TABLA>
  );
}
