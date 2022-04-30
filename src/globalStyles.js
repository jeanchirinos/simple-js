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

    svg.muted-icon,
    .muted-icon svg {
      cursor: pointer;
      color: gray;
      transition: color 0.3s;

      :hover {
        color: ${theme.opposite.primary};
      }
    }

    /** EXTRA */
    ::selection {
      background-color: ${theme.selection_background};
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
