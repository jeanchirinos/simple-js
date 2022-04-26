import styled, { css } from 'styled-components';

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

export const S_SECTION = styled.section`
  min-height: 700px;
  padding: 0.8rem;
  display: grid;
  row-gap: 1rem;
`;

export const BOX = styled.div(
  ({ theme }) => css`
    background-color: ${theme.secondary};
    border-radius: 8px;
    overflow: auto;
    box-shadow: ${theme.box_shadow};
    transition: outline 0.3s, box-shadow 0.3s, background-color 0.3s;
  `
);
