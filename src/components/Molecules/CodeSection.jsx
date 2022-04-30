import styled, { css } from 'styled-components';
import { S_SECTION, BOX } from 'components/StyledComponents';
import CodeEditor from 'components/Organisms/CodeEditor';
import CodeCompiled from 'components/Organisms/CodeCompiled';

export default function CodeSection() {
  return (
    <S_CODE_SECTION>
      <CodeEditor />
      <CodeCompiled />
    </S_CODE_SECTION>
  );
}

const S_CODE_SECTION = styled(S_SECTION)`
  height: calc(100vh - 80px);
`;

export const S_CODE_BOX = styled(BOX)(
  ({ theme }) => css`
    overflow: hidden;
    position: relative;

    :first-child {
      outline: 0.5px solid transparent;

      :focus-within {
        outline: 0.5px solid ${theme.editor_border_focus};
      }
    }

    > div {
      height: 100%;
      overflow: auto;
    }
  `
);
