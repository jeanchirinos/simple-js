import { useContext } from 'react';
import styled from 'styled-components';
import { S_SECTION } from 'components/StyledComponents';
import CodeEditor from 'components/Molecules/CodeEditor';
import CodeCompiled from 'components/Molecules/CodeCompiled';
import Errors from 'components/Molecules/Errors';
import { Code } from 'context/CodeContext';

export default function CodeSection() {
  const { compiledCode } = useContext(Code);

  return (
    <S_CODE_SECTION>
      <CodeEditor />
      {compiledCode ? <CodeCompiled /> : <Errors />}
    </S_CODE_SECTION>
  );
}

const S_CODE_SECTION = styled(S_SECTION)`
  height: calc(100vh - 80px);
`;
