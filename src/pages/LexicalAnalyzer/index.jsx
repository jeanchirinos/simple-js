import { useState } from 'react';
import styled from 'styled-components';
import Editor from 'components/Custom/Editor';
import Checkbox from './Checkbox';
import Table from './Table';
import { S_MAIN } from 'components/StyledComponents';

export default function LexicalAnalyzer() {
  const [code, setCode] = useState('if(a>b && a >0) {\nc = a – b;\n}');
  const [matchAllChecked, setMatchAllChecked] = useState(false);

  return (
    <S_MAIN2>
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
    </S_MAIN2>
  );
}

const S_MAIN2 = styled(S_MAIN)`
  grid-template: 1fr auto 1fr / 1fr;

  @media (min-width: 768px) {
    grid-template: 1fr / 1fr auto 1fr;
  }
`;
