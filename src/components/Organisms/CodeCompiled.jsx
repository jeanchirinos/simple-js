import { S_CODE_BOX } from 'components/StyledComponents';
import CodeActions from 'components/Molecules/CodeActions';
import CodeBox from 'components/Atoms/CodeEditor';

export default function CodeCompiled() {
  return (
    <S_CODE_BOX>
      <div>
        <CodeBox.Compiled />
      </div>
      <CodeActions.Compiled />
    </S_CODE_BOX>
  );
}
