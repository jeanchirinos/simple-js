import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import { lightColors, darkColors } from './styleguide/themedColors';
import { ThemeContext } from './context/ContextWrapper';
import Header from './components/Molecules/Header';
import Main from './components/Organisms/Main';

export default function App() {
  const { darkTheme } = useContext(ThemeContext);

  const theme = darkTheme ? darkColors : lightColors;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}
