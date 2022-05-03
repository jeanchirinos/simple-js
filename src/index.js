import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'App';
import ThemeContext from 'context/ThemeContext';
import CodeContext from 'context/CodeContext';
import LexicalAnalyzer from './pages/LexicalAnalyzer';
import Home from 'pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeContext>
      <CodeContext>
        <BrowserRouter>
          <App>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analizador-lexico" element={<LexicalAnalyzer />} />
            </Routes>
          </App>
        </BrowserRouter>
      </CodeContext>
    </ThemeContext>
  </StrictMode>
);
