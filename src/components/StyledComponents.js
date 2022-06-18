import styled, { css } from 'styled-components/macro';

export const Flex = styled.article(
  ({
    column,
    fullCenter,
    justifyCenter,
    alignCenter,
    justify,
    align,
    $wrap,
    gap,
    columnGap,
    rowGap,
  }) => css`
    display: flex;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${$wrap && 'wrap'};

    gap: ${gap && `${gap}rem`};
    column-gap: ${columnGap && `${columnGap}rem`};
    row-gap: ${rowGap && `${rowGap}rem`};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);

export const Grid = styled.article(
  ({
    template,
    templateRows,
    templateColumns,
    gap,
    columnGap,
    rowGap,
    fullCenter,
  }) => css`
    display: grid;
    place-items: ${fullCenter && 'center'};
    gap: ${gap && `${gap}rem`};
    column-gap: ${columnGap && `${columnGap}rem`};
    row-gap: ${rowGap && `${rowGap}rem`};

    grid-template: ${template && `${template[0]} / ${template[1]}`};
    grid-template-rows: ${templateRows && templateRows};
    grid-template-columns: ${templateColumns && templateColumns};
  `
);

//
export const S_SECCION = styled.section`
  min-height: 700px;
  padding: 0.8rem;
  display: grid;
  row-gap: 1rem;
`;

export const CAJA = styled.div(
  ({ theme }) => css`
    background-color: ${theme.secundario};
    border-radius: 8px;
    box-shadow: ${theme.editor_sombra};
    transition: background-color var(--transition-t),
      outline var(--transition-t), box-shadow var(--transition-t);
  `
);

export const CAJA_TABLA = styled(CAJA)`
  position: relative;
  overflow: auto;
`;

export const S_CAJA_CODIGO = styled(CAJA)`
  position: relative;
  overflow: hidden;

  > div {
    height: calc(100% - 54px);
    overflow: auto;
  }
`;

export const S_CAJA_INFORMACION = styled(CAJA)(
  ({ theme }) => css`
    padding: 0.8rem 0.8rem 0 0.8rem;
    overflow: auto;

    p {
      color: ${theme.fuente_light};
      font-size: 0.9rem;
      text-align: end;
      margin-bottom: 0.8rem;
    }

    ul {
      all: unset;
      list-style: none;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    .ubicacion {
      color: gray;
    }
  `
);

export const S_BOTONES = styled.aside.attrs({
  className: 'icono-gris',
})`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 15px;
  right: 20px;

  svg {
    font-size: 1.2rem;
  }
`;

// pages

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
