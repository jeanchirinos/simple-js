import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextWrapper from './context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </StrictMode>
);
