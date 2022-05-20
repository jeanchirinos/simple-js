import { useState } from 'react';
import styled from 'styled-components';
import Editor from 'components/Custom/Editor';
import TextArea from './TextArea';

export default function SyntacticAnalyzer() {
  const [code, setCode] = useState(
    'function(){\nint var1=1;\nString mensaje;\nString mensaje="Hola";\n}'
  );

  return (
    <S_MAIN>
      <section>
        <Editor code={code} setCode={setCode} />
      </section>
      <section>
        <TextArea code={code} />
      </section>
    </S_MAIN>
  );
}

const S_MAIN = styled.main`
  height: var(--vh100);
  min-height: 500px;
  display: grid;
  grid-template: repeat(2, 1fr) / 1fr;

  section {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: min(800px, 100%);
      height: min(500px, 100%);
    }
  }

  @media (min-width: 768px) {
    grid-template: 1fr / repeat(2, 1fr);
  }
`;
