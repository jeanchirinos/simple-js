import { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Code } from 'context/CodeContext';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

function Editor() {
  const { code, setCode, setCompiledCode } = useContext(Code);

  function compileCode(code) {
    const pattern =
      /^(?<palabra_reservada>if)(?<inicio_condicion>\()(?<condicion>.+)(?<fin_condicion>\))\s(?<inicio_bloque>\{)\n(?<instruccion>.+);\n(?<fin_bloque>\})/m;

    const match = code.match(pattern);
    console.log(match?.groups || 'No match');

    setCode(code);
    setCompiledCode(code);
  }

  const highlightWithLineNumbers = input =>
    highlight(input, languages.js)
      .split('\n')
      .map((line, i) => `<span class='lineNumber'>${i + 1}</span>${line}`)
      .join('\n');

  return (
    <S_EDITOR
      placeholder="Escribe aquí..."
      value={code}
      onValueChange={code => compileCode(code)}
      highlight={code => highlightWithLineNumbers(code)}
    />
  );
}

function Compiled() {
  const { compiledCode } = useContext(Code);

  useEffect(() => {
    const compiled_textarea = document.getElementById('compiled_textarea');
    compiled_textarea.setAttribute('readonly', true);
  }, []);

  const highlightWithLineNumbers = input =>
    highlight(input, languages.js)
      .split('\n')
      .map((line, i) => `<span class='lineNumber'>${i + 1}</span>${line}`)
      .join('\n');

  return (
    <S_EDITOR
      value={compiledCode}
      highlight={compiledCode => highlightWithLineNumbers(compiledCode)}
      textareaId="compiled_textarea"
    />
  );
}

const darkTokens = css`
  .token.keyword {
    color: #57c8f9;
  }

  .token.punctuation {
    color: #a69e94;
  }

  .token.string {
    color: #c6f963;
  }

  .token.constant {
    color: #f963b6;
  }

  .token.operator {
    color: #c49d6f;
  }

  .token.function-variable.function {
    color: #da5772;
  }

  .token.function {
    color: #da5772;
  }

  .token.number {
    color: #f963b6;
  }

  .token.boolean {
    color: #f963b6;
  }

  .token.comment {
    color: #978e81;
  }
`;

export const S_EDITOR = styled(SimpleCodeEditor)(
  ({ theme }) => css`
    min-height: 100%;
    font-family: 'Fira code', 'Fira Mono', monospace;
    font-size: 14px;
    line-height: 1.5rem;
    counter-reset: line;

    .lineNumber {
      color: ${theme.font_light};
      width: 30px;
      text-align: right;
      position: absolute;
      left: 0px;
    }

    textarea,
    pre {
      padding: 0.8rem 3.5rem 0rem 3.5rem !important;
    }

    textarea:focus {
      outline: none;
    }

    .token.operator {
      background-color: transparent;
    }

    ${theme.dark && darkTokens}
  `
);

const CodeBox = {
  Editor,
  Compiled,
};

export default CodeBox;
