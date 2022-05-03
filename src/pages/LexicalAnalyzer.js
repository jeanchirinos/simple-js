import { useState } from 'react';
import styled, { css } from 'styled-components';
import Editor from 'components/Custom/Editor';

export default function LexicalAnalyzer() {
  const [code, setCode] = useState('if(a>b && a >0) {\nc = a – b;\n}');

  const editorProps = {
    code,
    setCode,
  };

  const pattern =
    /^(?<palabra_reservada>if)(?<inicio_condicion>\()(?<condicion>.+)(?<fin_condicion>\))\s(?<inicio_bloque>\{)\n(?<instruccion>.+);\n(?<fin_bloque>\})/m;

  const match = code.match(pattern);

  const groups = Object.entries(match?.groups || {});

  return (
    <S_MAIN>
      <div className="container">
        <Editor {...editorProps} />
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Posición</th>
              <th>Token</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(([key, value], index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{value}</td>
                <td>{key}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </S_MAIN>
  );
}

const S_MAIN = styled.main(
  ({ theme }) => css`
    height: calc(100vh - 80px);
    min-height: 500px;
    display: grid;
    grid-template: 1fr 1fr / 1fr;

    @media (min-width: 768px) {
      grid-template: 1fr / 1fr 1fr;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      overflow: auto;

      > div,
      table {
        width: min(800px, 100%);
        height: min(500px, 100%);
      }
    }

    table {
      border-radius: 8px;
      border-spacing: 0;
      font-size: 14px;
      box-shadow: ${theme.box_shadow};
      transition: border 0.3s;
      text-align: center;
    }

    thead {
      background-color: ${theme.secondary};
      color: ${theme.font_light};
      transition: background-color 0.3s;
    }

    th {
      padding: 1rem 0;
      :first-child {
        border-top-left-radius: 8px;
      }

      :last-child {
        border-top-right-radius: 8px;
      }
    }

    tr:nth-child(even) {
      background-color: ${theme.secondary};
      transition: background-color 0.3s;
    }
  `
);
