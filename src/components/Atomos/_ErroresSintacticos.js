import { CAJA } from 'components/StyledComponents';
import styled, { css } from 'styled-components/macro';

export const S_CAJA_INFORMACION = styled(CAJA)(
  ({ theme }) => css`
    padding: 0.8rem 0.8rem 0 0.8rem;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    row-gap: 0.5rem;

    /* p {
      color: ${theme.fuente_light};
      font-size: 0.9rem;
      text-align: end;
      margin-bottom: 0.8rem;
    } */
  `
);

export const S_GRUPOS = styled.div(
  ({ theme }) => css`
    overflow: auto;

    p {
      width: fit-content;
      font-size: 0.8rem;
      padding: 0.3rem 1rem;
      border-radius: 4px;
      transition: background-color var(--transition-t);

      &.Advertencias {
        background-color: ${theme.advertencia_fondo};
        color: ${theme.advertencia_fuente};
      }

      &.Errores {
        background-color: ${theme.error_fondo};
        color: ${theme.error_fuente};
      }
    }

    b:before {
      content: ' : ';
      font-weight: normal;
    }

    ol {
      all: unset;
      list-style: none;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    span {
      color: gray;

      :before {
        content: ' ';
      }
    }
  `
);
