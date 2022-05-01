import { Grid, BOX } from 'components/StyledComponents';

export default function Variables() {
  return (
    <Grid template={['1fr 1fr', '1fr 1fr']} gap={0.5}>
      <BOX>
        <p>Variables #️⃣</p>
      </BOX>
      <BOX>
        <p>Variables #️⃣ y valores</p>
      </BOX>
      <BOX>
        <p>Variables ⚡</p>
      </BOX>
      <BOX>
        <p>Variables ⚡ y cadenas</p>
      </BOX>
    </Grid>
  );
}
