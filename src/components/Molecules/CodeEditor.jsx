import { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Code } from 'context/CodeContext';
import { S_CODE_BOX } from 'components/StyledComponents';
import CodeActions from 'components/Molecules/CodeActions';
import CodeBox from 'components/Atoms/CodeBox';

export default function CodeEditor() {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { uploadFile } = useContext(Code);

  function handleDragOver(e) {
    e.preventDefault();
    if (e.dataTransfer.types[0] === 'Files') {
      !isDraggingOver && setIsDraggingOver(true);
    }
  }

  function handleDrop(e) {
    e.preventDefault();

    if (isDraggingOver) {
      setIsDraggingOver(false);
      uploadFile(e);
    }
  }

  return (
    <S_CODE_EDITOR_BOX
      isDraggingOver={isDraggingOver}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={handleDrop}
    >
      <span>Suelta el archivo</span>
      <div>
        <CodeBox.Editor />
        <CodeActions.Editor />
      </div>
    </S_CODE_EDITOR_BOX>
  );
}

export const S_CODE_EDITOR_BOX = styled(S_CODE_BOX)(
  ({ theme, isDraggingOver }) => css`
    height: 100%;
    outline-width: 0.5px;
    outline-style: solid;
    outline-color: transparent;

    :focus-within {
      outline-color: ${theme.editor_border_focus};
    }

    > span {
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--transition-t);
    }

    > div {
      transition: filter var(--transition-t);
    }

    ${isDraggingOver &&
    css`
      > div {
        filter: blur(12px);
      }

      > span {
        opacity: 1;
      }
    `}
  `
);
