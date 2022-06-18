import AnalizadorLexico from 'components/Atomos/AnalizadorLexico';
import AnalizadorSintactico from 'components/Atomos/AnalizadorSintactico';
import { CAJA_TABLA } from 'components/StyledComponents';

export default function Analizadores() {
  return (
    <>
      <CAJA_TABLA>
        <AnalizadorLexico />
      </CAJA_TABLA>
      <CAJA_TABLA>
        <AnalizadorSintactico />
      </CAJA_TABLA>
    </>
  );
}
