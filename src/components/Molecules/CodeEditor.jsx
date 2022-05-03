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
      <p>Suelta el archivo</p>
      <div>
        <CodeBox.Editor />
        <CodeActions.Editor />
      </div>
    </S_CODE_EDITOR_BOX>
  );
}

export const S_CODE_EDITOR_BOX = styled(S_CODE_BOX)(
  ({ theme, isDraggingOver }) => css`
    outline: 0.5px solid transparent;
    height: 100%;

    :focus-within {
      outline: 0.5px solid ${theme.editor_border_focus};
    }

    > div {
      transition: filter 0.2s ease-in-out;
    }

    p {
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    ${isDraggingOver &&
    css`
      > div {
        filter: blur(12px);
      }

      p {
        opacity: 1;
      }
    `}
  `
);
