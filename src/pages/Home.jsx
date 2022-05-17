import styled from 'styled-components';
import CodeContext from 'context/CodeContext';
import CodeSection from 'components/Organisms/CodeSection';
import InfoSection from 'components/Organisms/InfoSection';

export default function Main() {
  return (
    <CodeContext>
      <S_MAIN>
        <CodeSection />
        <InfoSection />
      </S_MAIN>
    </CodeContext>
  );
}

const S_MAIN = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
