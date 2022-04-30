import { S_CODE_BOX } from 'components/Molecules/CodeSection';
import CodeActions from 'components/Molecules/CodeActions';
import CodeBox from 'components/Atoms/CodeEditor';

export default function CodeEditor() {
  return (
    <S_CODE_BOX>
      <div>
        <CodeBox.Editor />
      </div>
      <CodeActions.Editor />
    </S_CODE_BOX>
  );
}
