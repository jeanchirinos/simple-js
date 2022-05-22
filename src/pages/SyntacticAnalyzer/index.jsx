import { useState } from 'react';
import styled from 'styled-components';
import { S_MAIN } from 'components/StyledComponents';
import Editor from 'components/Custom/Editor';
import TextArea from './TextArea';

export default function SyntacticAnalyzer() {
  const [code, setCode] = useState(
    'function(){\nint var1=1;\nString mensaje;\nString mensaje="Hola";\n}'
  );

  return (
    <S_MAIN2>
      <section>
        <Editor code={code} setCode={setCode} />
      </section>
      <section>
        <TextArea code={code} />
      </section>
    </S_MAIN2>
  );
}

const S_MAIN2 = styled(S_MAIN)`
  grid-template-rows: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template: minmax(0, 1fr) / repeat(2, minmax(0, 1fr));
  }
`;
