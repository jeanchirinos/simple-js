import LexicalAnalyzer from 'components/Atoms/LexicalAnalyzer';
import { Grid, S_INFO_BOX } from 'components/StyledComponents';
import { Code } from 'context/CodeContext';
import { useContext } from 'react';

export default function Analyzers() {
  const { code } = useContext(Code);

  return (
    <Grid templateRows="minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)" rowGap={0.5}>
      <S_INFO_BOX style={{ padding: 0 }}>
        {/* <p>A. Léxico</p> */}
        <LexicalAnalyzer code={code} />
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>A. Sintáctico</p>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>A. Semántico</p>
      </S_INFO_BOX>
    </Grid>
  );
}
