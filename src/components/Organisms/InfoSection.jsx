import styled from 'styled-components';
import { S_SECTION } from 'components/StyledComponents';
import Analyzers from 'components/Molecules/Analyzers';
// import Variables from 'components/Molecules/Variables';

export default function InfoSection() {
  return (
    <S_INFO_SECTION>
      <Analyzers />
      {/* <Variables /> */}
    </S_INFO_SECTION>
  );
}

const S_INFO_SECTION = styled(S_SECTION)`
  height: 100vh;
  /* grid-template-rows: minmax(0, 75fr) minmax(0, 25fr); */
  grid-template-rows: repeat(3, minmax(0, 1fr));

  @media (min-width: 768px) {
    height: var(--vh100);
  }
`;
