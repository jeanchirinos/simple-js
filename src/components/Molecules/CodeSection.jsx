import { useState } from 'react';
import styled, { css } from 'styled-components';
import { BOX, S_SECTION } from '../StyledComponents';
import CodeEditor from '../Atoms/CodeEditor';
import DownloadButton from '../Atoms/DownloadButton';
import OpenFileButton from '../Atoms/OpenFileButton';
import ClearCodeButton from '../Atoms/ClearCodeButton';
import CopyButton from '../Atoms/CopyButton';

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
        <CopyButton code={code} />
        <OpenFileButton setCode={setCode} setCompiledCode={setCompiledCode} />
        <ClearCodeButton setCode={setCode} setCompiledCode={setCompiledCode} />
      </BOX>
      <BOX>
        <CodeEditor code={compiledCode} compiledEditor />
        <DownloadButton code={code} />
      </BOX>
    </S_CODE_SECTION>
  );
}

const S_CODE_SECTION = styled(S_SECTION)(
  ({ theme }) => css`
    height: calc(100vh - 80px);
    grid-template-rows: 1fr 1fr;

    ${BOX}.editor-container {
      outline: 0.5px solid transparent;

      :focus-within {
        outline: 0.5px solid ${theme.editor_border_focus};
      }

      svg {
        color: ${theme.font_light};
        position: absolute;
        top: 10px;
        font-size: 1.2rem;
        transition: transform 0.3s;
        cursor: pointer;

        :hover {
          transform: scale(1.2);
        }

        :first-of-type {
          right: 15px;
        }

        :nth-of-type(2) {
          right: 50px;
        }

        :last-of-type {
          right: 85px;
        }
      }
    }

    a {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 1.2rem;
      transition: transform 0.3s;
      color: ${theme.font_light};
      :hover {
        transform: scale(1.2);
      }
    }
  `
);
