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
import SyntacticAnalyzer from 'pages/SyntacticAnalyzer';

export default function App() {
  const { darkTheme } = useContext(Theme);

  const theme = darkTheme ? darkColors : lightColors;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analizador-lexico" element={<LexicalAnalyzer />} />
          <Route
            path="/analizador-sintactico"
            element={<SyntacticAnalyzer />}
          />
        </Routes>
        <CustomToaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}
