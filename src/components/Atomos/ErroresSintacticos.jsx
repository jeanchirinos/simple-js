import { S_CAJA_INFORMACION } from 'components/StyledComponents';
import useCodigo from 'hooks/useCodigo';

export default function ErroresSintacticos() {
  const { gruposConAdvertencia, gruposConError } = useCodigo();

  return (
    <S_CAJA_INFORMACION>
      <ul>
        {gruposConAdvertencia?.map((grupo, i) => (
          <Mensaje
            {...grupo}
            key={i}
            mensaje={`⚠️ Te falta un(a) ${grupo.tipo}`}
          />
        ))}
      </ul>

      <ul>
        {gruposConError?.map((grupo, i) => (
          <Mensaje
            {...grupo}
            key={i}
            mensaje={`❌ Expresión incorrecta: ${grupo.token}`}
          />
        ))}
      </ul>
    </S_CAJA_INFORMACION>
  );
}

function Mensaje({ mensaje, linea, columna }) {
  return (
    <li>
      {mensaje}
      <span className="ubicacion">
        [ {linea}, {columna} ]
      </span>
    </li>
  );
}
