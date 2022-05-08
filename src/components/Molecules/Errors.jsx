import { Grid, S_INFO_BOX } from 'components/StyledComponents';

export default function Errors() {
  return (
    <Grid templateRows="minmax(0, 1fr) minmax(0, 1fr)" rowGap={0.5}>
      <S_INFO_BOX>
        <p>Errores Sintácticos</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>Errores Semánticos</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </S_INFO_BOX>
    </Grid>
  );
}
