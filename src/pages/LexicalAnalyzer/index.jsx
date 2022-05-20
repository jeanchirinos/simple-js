import { useState } from 'react';
import styled from 'styled-components';
import Editor from 'components/Custom/Editor';
import Checkbox from './Checkbox';
import Table from './Table';

export default function LexicalAnalyzer() {
  const [code, setCode] = useState('if(a>b && a >0) {\nc = a – b;\n}');
  const [matchAllChecked, setMatchAllChecked] = useState(false);

  return (
    <S_MAIN>
      <section>
        <Editor code={code} setCode={setCode} />
      </section>
      <section>
        <Checkbox
          matchAllChecked={matchAllChecked}
          setMatchAllChecked={setMatchAllChecked}
        />
      </section>
      <section>
        <Table code={code} matchAllChecked={matchAllChecked} />
      </section>
    </S_MAIN>
  );
}

const S_MAIN = styled.main`
  height: var(--vh100);
  min-height: 500px;
  display: grid;
  grid-template: 1fr auto 1fr / 1fr;

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
    grid-template: 1fr / 1fr auto 1fr;
  }
`;
