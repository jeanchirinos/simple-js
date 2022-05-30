import { useState } from 'react';
import styled from 'styled-components';
import { S_MAIN } from 'components/StyledComponents';
import Editor from 'components/Custom/Editor';
import Analisis from './Analisis';
import Errores from './Errores';

export default function AnalizadorSintactico() {
  const [code, setCode] = useState(
    'function(){\nint var1=1;\nString mensaje;\nString mensaje="Hola";\n}'
  );

  return (
    <S_MAIN2>
      <section>
        <Editor code={code} setCode={setCode} />
      </section>
      <section>
        <article className="resultados">
          <Analisis code={code} />
          <Errores code={code} />
        </article>
      </section>
    </S_MAIN2>
  );
}

const S_MAIN2 = styled(S_MAIN)`
  grid-template-rows: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template: minmax(0, 1fr) / repeat(2, minmax(0, 1fr));
  }

  .resultados {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    row-gap: 1rem;
  }
`;
