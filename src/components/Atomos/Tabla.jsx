import { CAJA_TABLA, S_TABLA } from './_Tabla';

export default function Tabla({ children }) {
  return (
    <CAJA_TABLA>
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
    </CAJA_TABLA>
  );
}
