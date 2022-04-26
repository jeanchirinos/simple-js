import { BOX, Grid } from '../StyledComponents';

export default function Analyzers() {
  return (
    <Grid rowGap={0.5}>
      <BOX>
        <p>Analizador Léxico</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
      <BOX>
        <p>Analizador Sintáctico</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
      <BOX>
        <p>Analizador Semántico</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
    </Grid>
  );
}
