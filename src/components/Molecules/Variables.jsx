import { BOX, Grid } from '../StyledComponents';

export default function Variables() {
  return (
    <Grid template={['1fr 1fr', '1fr 1fr']} gap={0.5}>
      <BOX>
        <p>Variables #️⃣</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
      <BOX>
        <p>Variables #️⃣ y valores</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>

      <BOX>
        <p>Variables ⚡</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
      <BOX>
        <p>Variables ⚡ y cadenas</p>
        <ul>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit Lorem ipsum dolor sit</li>
        </ul>
      </BOX>
    </Grid>
  );
}
