import App from 'App';
import ContextoArchivo from 'context/CtxArchivo';
import ContextoCodigo from 'context/CtxCodigo';
import ContextoTema from 'context/CtxTema';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextoTema>
      <ContextoCodigo>
        <ContextoArchivo>
          <App />
        </ContextoArchivo>
      </ContextoCodigo>
    </ContextoTema>
  </StrictMode>
);
