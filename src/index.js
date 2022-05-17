import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContext from 'context/ThemeContext';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </StrictMode>
);
