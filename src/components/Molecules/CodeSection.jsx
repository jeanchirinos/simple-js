import { useState } from 'react';
import styled, { css } from 'styled-components';
import { BOX, S_SECTION } from '../StyledComponents';
import CodeEditor from '../Atoms/CodeEditor';

export default function CodeSection() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [compiledCode, setCompiledCode] = useState(code);

  return (
    <S_CODE_SECTION>
      <BOX className="editor-container">
        <CodeEditor
          code={code}
          setCode={setCode}
          setCompiledCode={setCompiledCode}
        />
      </BOX>
      <BOX>
        <CodeEditor code={compiledCode} compiledEditor />
      </BOX>
    </S_CODE_SECTION>
  );
}

const S_CODE_SECTION = styled(S_SECTION)(
  ({ theme }) => css`
    height: calc(100vh - 80px);

    ${BOX}.editor-container {
      outline: 0.5px solid transparent;

      :focus-within {
        outline: 0.5px solid ${theme.editor_border_focus};
      }
    }
  `
);
