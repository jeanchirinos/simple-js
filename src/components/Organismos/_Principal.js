import styled from 'styled-components/macro';

export const S_MAIN = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 45% 55%;
  }
`;

export const S_SECCION = styled.section`
  min-height: 700px;
  padding: 0.8rem;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  row-gap: 1rem;
`;

export const S_SECCION_INFO = styled(S_SECCION)`
  height: 100vh;

  @media (min-width: 768px) {
    height: var(--pantalla-completa);
  }
`;

export const S_SECCION_CODIGO = styled(S_SECCION)`
  height: var(--pantalla-completa);
`;
