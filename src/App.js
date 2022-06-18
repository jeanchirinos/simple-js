import Notificador from 'components/Atomos/Notificador';
import Cabecera from 'components/Moleculas/Cabecera';
import { CtxTema } from 'context/CtxTema';
import EstilosGlobales from 'estilosGlobales';
import { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import { coloresClaros, coloresOscuros } from 'utilities/coloresTemas';
import SeccionCodigo from 'components/Organismos/SeccionCodigo';
import SeccionInformacion from 'components/Organismos/SeccionInformacion';

export default function App() {
  const { temaOscuro } = useContext(CtxTema);

  const tema = temaOscuro ? coloresOscuros : coloresClaros;

  return (
    <ThemeProvider theme={tema}>
      <EstilosGlobales />
      <Cabecera />
      <S_MAIN>
        <SeccionCodigo />
        <SeccionInformacion />
      </S_MAIN>
      <Notificador />
    </ThemeProvider>
  );
}

const S_MAIN = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
