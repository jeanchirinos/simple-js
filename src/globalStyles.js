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
      font-family: 'Raleway';
      font-size: 0.9rem;
    }

    h1 {
      font-weight: 900;
    }

    .toast {
      font-size: 0.9rem;
      background-color: ${theme.toast_background_success};
      color: ${theme.toast_color_success};

      &.error {
        background-color: ${theme.toast_background_error};
        color: ${theme.toast_color_error};
      }
    }

    svg.muted-icon,
    .muted-icon svg {
      color: gray;
      cursor: pointer;
      transition: color 0.3s;

      &:not(.disabled):hover {
        color: ${theme.opposite.primary};
      }

      &.disabled {
        opacity: 0.4;
        cursor: default;
      }
    }

    a {
      text-decoration: none;
      color: ${theme.font};
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
