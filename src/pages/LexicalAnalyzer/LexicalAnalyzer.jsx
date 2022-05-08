import { useState } from 'react';
import styled from 'styled-components';
import Editor from 'components/Custom/Editor';
import Checkbox from './components/Checkbox';
import Table from './components/Table';

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
  display: grid;
  grid-template:
    min(500px, calc(50vh - 80px)) auto min(500px, calc(50vh - 80px))
    / 1fr;

  section {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: min(800px, 100%);
      height: min(500px, 100%);
    }

    > div.table-container {
      box-shadow: ${props => props.theme.box_shadow};
      border-radius: 8px;
      overflow: auto;
      transition: box-shadow 0.3s;
    }
  }

  @media (min-width: 768px) {
    grid-template: calc(100vh - 80px) / 1fr auto 1fr;

    section {
      min-height: 500px;
    }
  }
`;
