import Notificador from 'components/Atomos/Notificador';
import Cabecera from 'components/Moleculas/Cabecera';
import { CtxTema } from 'context/CtxTema';
import EstilosGlobales from 'estilosGlobales';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { coloresClaros, coloresOscuros } from 'utilities/coloresTemas';
import Principal from 'components/Organismos/Principal';

export default function App() {
  const { temaOscuro } = useContext(CtxTema);

  const tema = temaOscuro ? coloresOscuros : coloresClaros;

  return (
    <ThemeProvider theme={tema}>
      <EstilosGlobales />
      <Cabecera />
      <Principal />
      <Notificador />
    </ThemeProvider>
  );
}
