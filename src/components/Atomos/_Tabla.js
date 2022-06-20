import { CAJA } from 'components/StyledComponents';
import styled, { css } from 'styled-components/macro';

export const CAJA_TABLA = styled(CAJA)`
  position: relative;
  overflow: auto;
`;

export const S_TABLA = styled.table(
  ({ theme }) => css`
    width: 100%;
    border-spacing: 0;
    font-size: 14px;
    text-align: center;

    .cabecera {
      padding: 0.8rem;
      border-top: 1px solid #666666;
      border-bottom: 1px solid #666666;
    }

    thead {
      color: ${theme.fuente_light};
    }

    th {
      padding: 1rem 0.8rem;
    }

    tbody tr {
      transition: background-color var(--transition-t);

      :nth-child(odd) {
        background-color: ${theme.primario};
      }
      :nth-child(even) {
        background-color: ${theme.secundario};
      }
      &.fila-principal {
        background-color: ${theme.tabla_fila_fondo};
        color: ${theme.tabla_fila_fuente};
      }
    }
  `
);
