import ErroresSintacticos from 'components/Atoms/ErroresSintacticos';
import { Grid, S_INFO_BOX } from 'components/StyledComponents';
import { useContext } from 'react';
import { Code } from 'context/CodeContext';

export default function Errors() {
  const { code } = useContext(Code);

  return (
    <Grid templateRows="repeat(2, minmax(0, 1fr))" rowGap={0.5}>
      <ErroresSintacticos codigo={code} />
      <S_INFO_BOX>
        <p>Errores Semánticos</p>
      </S_INFO_BOX>
    </Grid>
  );
}
