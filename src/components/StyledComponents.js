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
    box-shadow: ${theme.box_shadow};
    transition: background-color var(--transition-t),
      outline var(--transition-t), box-shadow var(--transition-t);
  `
);

export const S_CODE_BOX = styled(BOX)`
  position: relative;
  overflow: hidden;

  > div {
    height: 100%;
    overflow: auto;
  }
`;

export const S_INFO_BOX = styled(BOX)(
  ({ theme }) => css`
    padding: 0.8rem 0.8rem 0 0.8rem;
    overflow: auto;

    p {
      color: ${theme.font_light};
      font-size: 0.9rem;
      text-align: end;
      margin-bottom: 0.8rem;
    }

    ul {
      font-size: 0.8rem;
      line-height: 1.2rem;
      padding-inline-start: 1rem;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  `
);
