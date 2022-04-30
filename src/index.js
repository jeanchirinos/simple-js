import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import CodeContext from 'context/CodeContext';
import ThemeContext from 'context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeContext>
      <CodeContext>
        <App />
      </CodeContext>
    </ThemeContext>
  </StrictMode>
);
