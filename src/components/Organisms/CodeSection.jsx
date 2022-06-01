import { S_SECTION } from 'components/StyledComponents';
import CodeEditor from 'components/Molecules/CodeEditor';
import CodeCompiled from 'components/Molecules/CodeCompiled';

export default function CodeSection() {
  return (
    <S_SECTION className="vh100">
      <CodeEditor />
      <CodeCompiled />
    </S_SECTION>
  );
}
