import { createGlobalStyle, css } from 'styled-components';
import '@fontsource/raleway/900.css';
import '@fontsource/raleway/400.css';

export default createGlobalStyle(
  ({ theme }) => css`
    *,
    ::after,
    ::before {
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${theme.primary};
      color: ${theme.font};
      visibility: hidden;
    }

    h1,
    p,
    ul {
      font-family: 'Raleway';
    }

    h1 {
      font-weight: 900;
    }

    p {
      font-weight: 400;
    }

    /** EXTRA */
    ::selection {
      background-color: rgba(233, 233, 99, 0.5);
    }

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.scrollbar_thumb};
      border-radius: 10px;
    }
  `
);
