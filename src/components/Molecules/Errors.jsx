import { Grid, BOX } from 'components/StyledComponents';

export default function Errors() {
  return (
    <Grid templateColumns="1fr 1fr" columnGap={0.5}>
      <BOX>
        <p>Errores Sintácticos</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
      <BOX>
        <p>Errores Semánticos</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
    </Grid>
  );
}
