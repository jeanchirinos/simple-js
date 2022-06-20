import CajaEditable from 'components/Moleculas/CajaEditable';
import CajaNoEditable from 'components/Moleculas/CajaNoEditable';
import { useContext } from 'react';
import { CtxCodigo } from 'context/CtxCodigo';
import ErroresSintacticos from 'components/Atomos/ErroresSintacticos';
import { S_MAIN, S_SECCION_CODIGO, S_SECCION_INFO } from './_Principal';
import AnalizadorLexico from 'components/Atomos/AnalizadorLexico';
import AnalizadorSintactico from 'components/Atomos/AnalizadorSintactico';

export default function Principal() {
  const { gruposConAdvertencia, gruposConError } = useContext(CtxCodigo);

  const hayErrores =
    gruposConAdvertencia.length > 0 || gruposConError.length > 0;

  return (
    <S_MAIN>
      <S_SECCION_CODIGO>
        <CajaEditable />
        {hayErrores ? <ErroresSintacticos /> : <CajaNoEditable />}
      </S_SECCION_CODIGO>
      <S_SECCION_INFO>
        <AnalizadorLexico />

        <AnalizadorSintactico />
      </S_SECCION_INFO>
    </S_MAIN>
  );
}
