import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { Grid, BOX, S_INFO_BOX } from 'components/StyledComponents';
import LexicalAnalyzer from 'components/Atoms/LexicalAnalyzer';

export default function Analyzers() {
  const { code } = useContext(Code);

  return (
    <Grid templateRows="minmax(0,6fr) repeat(2, minmax(0,2fr))" rowGap={0.5}>
      <BOX style={{ overflow: 'auto' }}>
        <LexicalAnalyzer code={code} />
      </BOX>
      <S_INFO_BOX>
        <p>A. Sintáctico</p>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>A. Semántico</p>
      </S_INFO_BOX>
    </Grid>
  );
}
