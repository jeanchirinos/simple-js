import { useContext } from 'react';
import { Code } from 'context/CodeContext';
// import { Grid, BOX, S_INFO_BOX } from 'components/StyledComponents';
import { BOX } from 'components/StyledComponents';
import LexicalAnalyzer from 'components/Atoms/LexicalAnalyzer';
import AnalizadorSintactico from 'components/Atoms/AnalizadorSintactico';
import ErroresSintacticos from 'components/Atoms/ErroresSintacticos';

export default function Analyzers() {
  const { code } = useContext(Code);

  return (
    // <Grid templateRows="minmax(0,6fr) repeat(2, minmax(0,2fr))" rowGap={0.5}>
    <>
      <BOX className="contenedor-tabla">
        <LexicalAnalyzer code={code} />
      </BOX>
      <AnalizadorSintactico code={code} />
      <ErroresSintacticos codigo={code} />
    </>
    // </Grid>
  );
}
