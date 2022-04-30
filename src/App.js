import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'globalStyles';
import { Theme } from 'context/ThemeContext';
import { lightColors, darkColors } from 'styleguide/themedColors';
import Main from 'components/Organisms/Main';
import Header from 'components/Molecules/Header';
import CustomToaster from 'components/Atoms/CustomToaster';

export default function App() {
  const { darkTheme } = useContext(Theme);

  if (darkTheme !== undefined) {
    const theme = darkTheme ? darkColors : lightColors;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Main />
        <CustomToaster />
      </ThemeProvider>
    );
  }
}
