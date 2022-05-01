import styled, { css } from 'styled-components';
import { S_SECTION, BOX } from 'components/StyledComponents';
import Analyzers from 'components/Molecules/Analyzers';
import Errors from 'components/Molecules/Errors';
import Variables from 'components/Molecules/Variables';

export default function InfoSection() {
  const allBoxes = true;

  return (
    <S_INFO_SECTION allBoxes={allBoxes}>
      {allBoxes ? (
        <>
          <Errors />
          <Analyzers />
          <Variables />
        </>
      ) : (
        <Analyzers />
      )}
    </S_INFO_SECTION>
  );
}

const S_INFO_SECTION = styled(S_SECTION)(
  ({ theme, allBoxes }) => css`
    height: 100vh;
    grid-template-rows: ${allBoxes &&
    'minmax(0, 20fr) minmax(0, 50fr) minmax(0, 30fr)'};

    @media (min-width: 768px) {
      height: calc(100vh - 80px);
    }

    ${BOX} {
      padding: 0.8rem 0.8rem 0 0.8rem;
      overflow: auto;

      p {
        margin-bottom: 0.8rem;
        text-align: end;
        color: ${theme.font_light};
        font-size: 0.9rem;
      }

      ul {
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding-inline-start: 1rem;
        margin-block-start: 0;
        margin-block-end: 0;
      }
    }
  `
);
