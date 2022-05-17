import { useContext } from 'react';
import { S_SECTION } from 'components/StyledComponents';
import CodeEditor from 'components/Molecules/CodeEditor';
import CodeCompiled from 'components/Molecules/CodeCompiled';
import Errors from 'components/Molecules/Errors';
import { Code } from 'context/CodeContext';

export default function CodeSection() {
  const { compiledCode } = useContext(Code);

  return (
    <S_SECTION className="vh100">
      <CodeEditor />
      {compiledCode ? <CodeCompiled /> : <Errors />}
    </S_SECTION>
  );
}
