import { S_SECCION } from 'components/StyledComponents';
import CajaEditable from 'components/Moleculas/CajaEditable';
import CajaNoEditable from 'components/Moleculas/CajaNoEditable';
import { useContext } from 'react';
import { CtxCodigo } from 'context/CtxCodigo';
import ErroresSintacticos from 'components/Atomos/ErroresSintacticos';

export default function SeccionCodigo() {
  const { gruposConAdvertencia, gruposConError } = useContext(CtxCodigo);

  const hayErrores =
    gruposConAdvertencia.length > 0 || gruposConError.length > 0;

  return (
    <S_SECCION
      className="pantalla-completa"
      style={{ gridTemplateRows: 'repeat(2, minmax(0, 1fr)' }}
    >
      <CajaEditable />

      {hayErrores ? <ErroresSintacticos /> : <CajaNoEditable />}
    </S_SECCION>
  );
}
