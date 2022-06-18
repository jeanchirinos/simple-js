import '@fontsource/raleway/400.css';
import '@fontsource/raleway/900.css';
import { createGlobalStyle, css } from 'styled-components/macro';

export default createGlobalStyle(
  ({ theme }) => css`
    /*  */
    *,
    ::after,
    ::before {
      box-sizing: border-box;
    }

    :root {
      --pantalla-completa: calc(100vh - 80px);
      --transition-t: 0.3s;
    }

    body {
      margin: 0;
      background-color: ${theme.primario};
      color: ${theme.fuente};
      font-family: 'Raleway';

      &.con-transicion {
        transition: background-color var(--transition-t),
          color var(--transition-t);
      }
    }

    h1 {
      font-weight: 900;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ::selection {
      background-color: ${theme.seleccion};
    }

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.barra_scroll};
      border-radius: 10px;
    }
    /*  */

    .pantalla-completa {
      height: var(--pantalla-completa);
    }

    .notificador {
      font-size: 0.8rem;
      background-color: ${theme.notificador_fondo_exito};
      color: ${theme.notificador_fuente_exito};

      &.error {
        background-color: ${theme.notificador_fondo_error};
        color: ${theme.notificador_fuente_error};
      }
    }

    svg.icono-gris,
    .icono-gris svg {
      display: block;
      color: gray;
      cursor: pointer;
      transition: color var(--transition-t);

      &:not(.deshabilitado):hover {
        color: ${theme.opuesto.primario};
      }

      &.deshabilitado {
        opacity: 0.4;
        cursor: default;
      }
    }
  `
);
