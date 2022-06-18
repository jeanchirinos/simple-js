import { highlight, languages } from 'prismjs/components/prism-core';
import SimpleCodeEditor from 'react-simple-code-editor';
import styled, { css } from 'styled-components/macro';
import tokensOscuros from 'utilities/tokensOscuros';

export function customizarEditor(codigo) {
  return highlight(codigo, languages.js)
    .split('\n')
    .map((linea, i) => `<span class='numeroDeLinea'>${i + 1}</span>${linea}`)
    .join('\n');
}

export const S_EDITOR = styled(SimpleCodeEditor)(
  ({ theme }) => css`
    min-height: 100%;
    font-family: 'Fira code', 'Fira Mono', monospace;
    font-size: 14px;
    line-height: 1.5rem;

    .numeroDeLinea {
      color: ${theme.fuente_light};
      width: 30px;
      text-align: right;
      position: absolute;
      left: 0px;
    }

    textarea,
    pre {
      padding: 0 3.5rem 0rem 3.5rem !important;
    }

    textarea:focus {
      outline: none;
    }

    .token.operator {
      background-color: transparent;
    }

    ${theme.oscuro && tokensOscuros}
  `
);
