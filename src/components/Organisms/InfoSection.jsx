import styled, { css } from 'styled-components';
import { S_SECTION } from 'components/StyledComponents';
import Analyzers from 'components/Molecules/Analyzers';
// import Errors from 'components/Molecules/Errors';
import Variables from 'components/Molecules/Variables';

export default function InfoSection() {
  const allBoxes = true;

  return (
    <S_INFO_SECTION allBoxes={allBoxes}>
      {allBoxes ? (
        <>
          {/* <Errors /> */}
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
  ({ allBoxes }) => css`
    height: 100vh;
    /* grid-template-rows: ${allBoxes &&
    'minmax(0, 20fr) minmax(0, 50fr) minmax(0, 30fr)'}; */
    grid-template-rows: ${allBoxes && 'minmax(0, 75fr) minmax(0, 25fr)'};

    @media (min-width: 768px) {
      height: calc(100vh - 80px);
    }
  `
);
