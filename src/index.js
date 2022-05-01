import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import ThemeContext from 'context/ThemeContext';
import CodeContext from 'context/CodeContext';

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
