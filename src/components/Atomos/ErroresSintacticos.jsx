import { S_CAJA_INFORMACION, S_GRUPOS } from './_ErroresSintacticos';
import { CtxCodigo } from 'context/CtxCodigo';
import { valores } from 'utilities/valores';
import { useContext } from 'react';

export default function ErroresSintacticos() {
  const { gruposConAdvertencia, gruposConError } = useContext(CtxCodigo);

  return (
    <S_CAJA_INFORMACION>
      <Grupos
        grupos={gruposConAdvertencia}
        nombre="Advertencias"
        mensaje="⚠️ Te falta un(a) "
        propiedad="tipo"
      />
      <Grupos
        grupos={gruposConError}
        nombre="Errores"
        mensaje="❌ Expresión incorrecta : "
        propiedad="token"
      />
    </S_CAJA_INFORMACION>
  );
}

function Grupos({ grupos, nombre, mensaje, propiedad }) {
  return (
    grupos.length > 0 && (
      <S_GRUPOS>
        <p className={nombre}>{nombre}</p>
        <ol>
          {grupos.map((grupo, i) => {
            const valor = valores.find(valor => valor[0] === grupo.tipo);

            return (
              <li key={i}>
                {mensaje}
                {grupo[propiedad]}
                {valor && <b> {valor[1]} </b>}
                <span>
                  [ {grupo.linea}, {grupo.columna} ]
                </span>
              </li>
            );
          })}
        </ol>
      </S_GRUPOS>
    )
  );
}
