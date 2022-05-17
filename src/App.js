import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'globalStyles';
import { Theme } from 'context/ThemeContext';
import { lightColors, darkColors } from 'styleguide/themedColors';
import Home from 'pages/Home';
import LexicalAnalyzer from 'pages/LexicalAnalyzer';
import Header from 'components/Molecules/Header';
import CustomToaster from 'components/Atoms/CustomToaster';

export default function App() {
  const { darkTheme } = useContext(Theme);

  if (darkTheme !== undefined) {
    const theme = darkTheme ? darkColors : lightColors;

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analizador-lexico" element={<LexicalAnalyzer />} />
          </Routes>
          <CustomToaster />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
