import styled from 'styled-components/macro';
import { S_SECCION } from 'components/StyledComponents';
import Analizadores from 'components/Moleculas/Analizadores';

export default function SeccionInformacion() {
  return (
    <S_INFO_SECTION>
      <Analizadores />
    </S_INFO_SECTION>
  );
}

const S_INFO_SECTION = styled(S_SECCION)`
  height: 100vh;
  grid-template-rows: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    height: var(--pantalla-completa);
  }
`;
