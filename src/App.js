import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'globalStyles';
import { Theme } from 'context/ThemeContext';
import { lightColors, darkColors } from 'styleguide/themedColors';
import Header from 'components/Molecules/Header';
import CustomToaster from 'components/Atoms/CustomToaster';

export default function App({ children }) {
  const { darkTheme } = useContext(Theme);

  if (darkTheme !== undefined) {
    const theme = darkTheme ? darkColors : lightColors;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        {children}
        <CustomToaster />
      </ThemeProvider>
    );
  }
}
