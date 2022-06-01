import { S_INFO_BOX } from 'components/StyledComponents';
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

export default function ErroresSintacticos({ codigo }) {
  const matchesPorBloque = Array.from(codigo.matchAll(regexBloques));
  const lineas = codigo.split('\n');

  return (
    <S_INFO_BOX>
      <ul>
        {lineas.map((linea, indice) => {
          const matchesPorLinea = Array.from(linea.matchAll(regexLineas));

          return matchesPorLinea.map((datosMatch, i) => (
            <ErroresLineas
              key={i}
              numeroDeLinea={indice + 1}
              datosMatch={datosMatch}
            />
          ));
        })}
      </ul>

      <ul>
        {matchesPorBloque.map((datosMatch, i) => (
          <ErroresBloques
            key={i}
            datosLineas={datosLineas(lineas)}
            datosMatch={datosMatch}
          />
        ))}
      </ul>
    </S_INFO_BOX>
  );
}

function ErroresLineas({ numeroDeLinea, datosMatch }) {
  if (datosMatch.groups['HB_declaracion_funcion']) return null;

  const grupos = Object.entries(datosMatch.groups);

  return grupos.map((grupo, i) => {
    const token = grupo[1];

    if (token === undefined) return null;

    const tipo = grupo[0];
    const posicion = datosMatch.indices.groups[tipo][0];
    const columna = posicion + 1;

    if (token === '') {
      return (
        <li key={i}>
          ⚠️ Te falta un(a) {tipo}
          <span className="ubicacion">
            [ {numeroDeLinea}, {columna} ]
          </span>
        </li>
      );
    }

    if (tipo === 'incorrecto') {
      return (
        <li key={i}>
          ❌ Expresión incorrecta: {token}
          <span className="ubicacion">
            [ {numeroDeLinea} , {columna} ]
          </span>
        </li>
      );
    }

    return null;
  });
}

function ErroresBloques({ datosLineas, datosMatch }) {
  if (datosMatch.groups['H_declaracion_variable']) return null;

  const grupos = Object.entries(datosMatch.groups);

  return grupos.map((grupo, i) => {
    const token = grupo[1];

    if (token === undefined) return null;

    const tipo = grupo[0];
    const posicion = datosMatch.indices.groups[tipo][0];

    const datosLinea = Object.entries(datosLineas).find(
      datos => datos[1].inicio <= posicion && datos[1].fin >= posicion
    );

    const numeroDeLinea = datosLinea[0];
    const columna = posicion - datosLineas[numeroDeLinea].inicio + 1;

    if (token === '') {
      return (
        <li key={i}>
          ⚠️ Te falta un(a) {tipo}
          <span className="ubicacion">
            [ {numeroDeLinea}, {columna} ]
          </span>
        </li>
      );
    }

    if (tipo === 'incorrecto') {
      return (
        <li key={i}>
          ❌ Expresión incorrecta: {token}
          <span className="ubicacion">
            [ {numeroDeLinea} , {columna} ]
          </span>
        </li>
      );
    }

    return null;
  });
}
