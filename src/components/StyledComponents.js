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

export const CAJA = styled.div(
  ({ theme }) => css`
    background-color: ${theme.secundario};
    border-radius: 8px;
    box-shadow: ${theme.editor_sombra};
    transition: background-color var(--transition-t),
      outline var(--transition-t), box-shadow var(--transition-t);
  `
);

export const S_CAJA_CODIGO = styled(CAJA)`
  position: relative;
  overflow: hidden;

  > div {
    height: calc(100% - 54px);
    overflow: auto;
  }
`;

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
