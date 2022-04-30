import { BOX, Grid } from 'components/StyledComponents';

export default function Analyzers() {
  return (
    <Grid rowGap={0.5}>
      <BOX>
        <p>Analizador Léxico</p>
      </BOX>
      <BOX>
        <p>Analizador Sintáctico</p>
      </BOX>
      <BOX>
        <p>Analizador Semántico</p>
      </BOX>
    </Grid>
  );
}
