import styled from 'styled-components';
import { S_SECTION } from 'components/StyledComponents';
import CodeEditor from 'components/Molecules/CodeEditor';
import CodeCompiled from 'components/Molecules/CodeCompiled';

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
  grid-template-rows: 1fr 1fr;
`;
