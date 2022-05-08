import { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Code } from 'context/CodeContext';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const highlightWithLineNumbers = input =>
  highlight(input, languages.js)
    .split('\n')
    .map((line, i) => `<span class='lineNumber'>${i + 1}</span>${line}`)
    .join('\n');

function Editor() {
  const { code, setCode, setCompiledCode } = useContext(Code);

  function compileCode(code) {
    setCode(code);
    setCompiledCode(code);
  }

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

  .token.literal-property.property {
    color: #f963b6;
  }

  .token.string-property.property {
    color: #f963b6;
  }

  .token.regex-source.language-regex {
    color: #f9af2a;
  }

  .token.regex-delimiter {
    color: #f9af2a;
  }

  .token.regex-flags {
    color: #f9af2a;
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