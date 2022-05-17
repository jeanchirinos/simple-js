import { Grid, S_INFO_BOX } from 'components/StyledComponents';

export default function Variables() {
  return (
    <Grid template={['repeat(2, 1fr)', 'repeat(2, 1fr)']} gap={0.5}>
      <S_INFO_BOX>
        <p>Variables #️⃣</p>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>Variables #️⃣ y valores</p>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>Variables ⚡</p>
      </S_INFO_BOX>
      <S_INFO_BOX>
        <p>Variables ⚡ y cadenas</p>
      </S_INFO_BOX>
    </Grid>
  );
}
