import useCodigo from 'hooks/useCodigo';
import Tabla from './Tabla';

export default function AnalizadorSintactico() {
  const { gruposCorrectos } = useCodigo();

  return (
    <Tabla>
      {gruposCorrectos.map((g, i) => {
        const clase = g.tipo.startsWith('H') ? 'fila-principal' : '';

        return (
          <tr key={i} className={clase}>
            <td>{g.linea}</td>
            <td>{g.columna}</td>
            <td>{g.tipo}</td>
            <td>{g.token}</td>
          </tr>
        );
      })}
    </Tabla>
  );
}
