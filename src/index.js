import App from 'App';
import ContextoCodigo from 'context/CtxCodigo';
import ContextoTema from 'context/CtxTema';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextoTema>
      <ContextoCodigo>
        <App />
      </ContextoCodigo>
    </ContextoTema>
  </StrictMode>
);
