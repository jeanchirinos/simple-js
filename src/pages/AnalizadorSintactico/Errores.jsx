import { S_INFO_BOX } from 'components/StyledComponents';
import { regexs } from './regexs';

export default function Errores({ code: codigo }) {
  const lineas = codigo.split('\n');

  return (
    <S_INFO_BOX>
      <ul>
        {lineas.map((linea, i) => (
          <Error key={i} numeroDeLinea={i + 1} linea={linea} />
        ))}
      </ul>
    </S_INFO_BOX>
  );
}

function Error({ numeroDeLinea, linea }) {
  if (linea.trim() === '') return null;

  let datosMatch;

  regexs.find(regex => {
    datosMatch = linea.match(regex);
    return datosMatch;
  });

  if (!datosMatch)
    return (
      <li>
        ❌ Error sintáctico
        <span style={{ color: 'gray' }}> [ {numeroDeLinea} ]</span>
      </li>
    );

  // tipo = grupo[0] / token = grupo[1]
  const grupos = Object.entries(datosMatch.groups);
  const gruposFaltantes = grupos.filter(
    grupo => !grupo[1] && !grupo[0].startsWith('O_')
  );

  return gruposFaltantes.map((grupo, i) => (
    <li key={i}>
      ⚠️ Te falta un(a) {grupo[0]}
      <span style={{ color: 'gray' }}> [ {numeroDeLinea} ]</span>
    </li>
  ));
}
