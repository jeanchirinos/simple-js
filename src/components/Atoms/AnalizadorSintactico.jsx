import { BOX, S_TABLE } from 'components/StyledComponents';
import { regexLineas, regexBloques } from 'regex/Sintactico';

const datosLineas = lineas => {
  const datos = {};
  let contador = 0;

  lineas.forEach((linea, i) => {
    datos[i + 1] = {
      inicio: contador,
      fin: contador + linea.length,
    };
    contador += linea.length + 1;
  });

  return datos;
};

export default function AnalizadorSintactico({ code: codigo }) {
  const matchesPorBloque = Array.from(codigo.matchAll(regexBloques));
  const lineas = codigo.split('\n');

  return (
    <BOX className="contenedor-tabla">
      <S_TABLE>
        <thead>
          <tr>
            <th>Línea</th>
            <th>Columna</th>
            <th>Token</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <>
            {lineas.map((linea, indice) => {
              const matchesPorLinea = Array.from(linea.matchAll(regexLineas));

              return matchesPorLinea.map((datosMatch, i) => (
                <DatosMatchLinea
                  key={i}
                  numeroDeLinea={indice + 1}
                  datosMatch={datosMatch}
                />
              ));
            })}

            {matchesPorBloque.map((datosMatch, i) => (
              <DatosMatchBloque
                key={i}
                datosLineas={datosLineas(lineas)}
                datosMatch={datosMatch}
              />
            ))}
          </>
        </tbody>
      </S_TABLE>
    </BOX>
  );
}

function DatosMatchLinea({ numeroDeLinea, datosMatch }) {
  if (datosMatch.groups['HB_declaracion_funcion']) return null;

  const grupos = Object.entries(datosMatch.groups);

  return grupos.map((grupo, i) => {
    const token = grupo[1];

    if (!token) return null;

    const tipo = grupo[0];
    const posicion = datosMatch.indices.groups[tipo][0];

    if (tipo === 'incorrecto') return null;

    const columna = posicion + 1;
    const clase = tipo.startsWith('H') ? 'matchHeader' : '';

    return (
      <tr key={i} className={clase}>
        <td>{numeroDeLinea}</td>
        <td>{columna}</td>
        <td>{token}</td>
        <td>{tipo}</td>
      </tr>
    );
  });
}

function DatosMatchBloque({ datosLineas, datosMatch }) {
  if (datosMatch.groups['H_declaracion_variable']) return null;

  const grupos = Object.entries(datosMatch.groups);

  return grupos.map((group, i) => {
    const token = group[1];

    if (!token) return null;

    const tipo = group[0];
    const posicion = datosMatch.indices.groups[tipo][0];

    if (tipo === 'incorrecto') return null;

    const datosLinea = Object.entries(datosLineas).find(
      datos => datos[1].inicio <= posicion && datos[1].fin >= posicion
    );

    const numeroDeLinea = datosLinea[0];
    const columna = posicion - datosLineas[numeroDeLinea].inicio + 1;
    const clase = tipo.startsWith('H') ? 'matchHeader' : '';

    return (
      <tr key={i} className={clase}>
        <td>{numeroDeLinea}</td>
        <td>{columna}</td>
        <td>{token}</td>
        <td>{tipo}</td>
      </tr>
    );
  });
}
