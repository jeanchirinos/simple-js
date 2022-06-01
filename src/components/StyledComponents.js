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

//
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

    &.contenedor-tabla {
      overflow: auto;
    }
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
      list-style: none;
      font-size: 0.8rem;
      line-height: 1.2rem;
      padding-inline-start: 0rem;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .ubicacion {
      color: gray;
    }
  `
);

// pages

export const S_MAIN = styled.main`
  height: var(--vh100);
  min-height: 500px;
  display: grid;

  section {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: min(800px, 100%);
      height: min(500px, 100%);
    }
  }
`;

export const S_TABLE = styled.table(
  ({ theme }) => css`
    width: 100%;
    border-spacing: 0;
    font-size: 14px;
    text-align: center;

    .cabecera {
      /* background-color: black; */
      padding: 0.8rem;
      border-top: 1px solid #666666;
      border-bottom: 1px solid #666666;
      /* color: ${theme.primary}; */
      /* color: black; */
    }

    thead {
      color: ${theme.font_light};
    }

    th {
      padding: 1rem 0.8rem;
    }

    tbody tr {
      transition: background-color var(--transition-t);

      :nth-child(odd) {
        background-color: ${theme.primary};
      }
      :nth-child(even) {
        background-color: ${theme.secondary};
      }
      &.matchHeader {
        background-color: ${theme.table_background};
        color: ${theme.table_color};
      }
    }
  `
);
