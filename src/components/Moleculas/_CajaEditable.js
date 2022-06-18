import { S_CAJA_CODIGO } from 'components/StyledComponents';
import styled, { css } from 'styled-components/macro';

export const S_CAJA_EDITABLE = styled(S_CAJA_CODIGO)(
  ({ theme, arrastrando }) => css`
    height: 100%;
    outline-width: 0.5px;
    outline-style: solid;
    outline-color: transparent;

    :focus-within {
      outline-color: ${theme.editor_borde_seleccionado};
    }

    > span {
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--transition-t);
    }

    > div {
      transition: filter var(--transition-t);
    }

    ${arrastrando &&
    css`
      > div {
        filter: blur(12px);
      }

      > span {
        opacity: 1;
      }
    `}
  `
);
