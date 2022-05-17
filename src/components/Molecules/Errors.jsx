import { Grid, S_INFO_BOX } from 'components/StyledComponents';

export default function Errors() {
  return (
    <Grid templateRows="repeat(2, minmax(0, 1fr))" rowGap={0.5}>
      <S_INFO_BOX>
        <p>Errores Sintácticos</p>
        <ul></ul>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>Errores Semánticos</p>
      </S_INFO_BOX>
    </Grid>
  );
}
