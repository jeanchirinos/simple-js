import styled from 'styled-components';
import CodeSection from 'components/Molecules/CodeSection';
import InfoSection from 'components/Molecules/InfoSection';

export default function Main() {
  return (
    <S_MAIN>
      <CodeSection />
      <InfoSection />
    </S_MAIN>
  );
}

const S_MAIN = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
