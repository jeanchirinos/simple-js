import { useContext } from 'react';
import styled from 'styled-components';
import { Code } from 'context/CodeContext';
import ClearCodeButton from 'components/Atoms/ClearCodeButton';
import CopyButton from 'components/Atoms/CopyButton';
import DownloadButton from 'components/Atoms/DownloadButton';
import OpenFileButton from 'components/Atoms/OpenFileButton';

function Editor() {
  const { code } = useContext(Code);

  return (
    <S_CODE_EDITOR_ACTIONS>
      <CopyButton copyValue={code} />
      <OpenFileButton />
      <ClearCodeButton />
    </S_CODE_EDITOR_ACTIONS>
  );
}

function Compiled() {
  const { compiledCode } = useContext(Code);

  return (
    <S_CODE_EDITOR_ACTIONS>
      <CopyButton copyValue={compiledCode} />
      <DownloadButton downloadValue={compiledCode} />
    </S_CODE_EDITOR_ACTIONS>
  );
}

export const S_CODE_EDITOR_ACTIONS = styled.aside.attrs({
  className: 'muted-icon',
})`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 10px;
  right: 20px;

  svg {
    font-size: 1.2rem;
  }
`;

const CodeActions = {
  Editor,
  Compiled,
};

export default CodeActions;
