import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

export default function CodeEditor({
  code,
  setCode,
  setCompiledCode,
  compiledEditor,
}) {
  const placeholder = compiledEditor ? '' : 'Escribe aquí...';
  const textareaId = compiledEditor && 'compiled_textarea';

  useEffect(() => {
    const compiled_textarea = document.getElementById('compiled_textarea');
    compiled_textarea.setAttribute('readonly', true);
  }, []);

  // TODO: Implement compiler function
  function compileCode(code) {
    setCode(code);
    //

    // let compiledCode = '';

    // if (code === 'console.log') {
    //   compiledCode = 'log';
    // }

    let compiledCode = code;

    setCompiledCode(compiledCode);
  }

  return (
    <S_EDITOR
      placeholder={placeholder}
      value={code}
      onValueChange={code => compileCode(code)}
      highlight={code => highlight(code, languages.js)}
      textareaId={textareaId}
    />
  );
}

export const S_EDITOR = styled(Editor)(
  ({ theme }) => css`
    min-height: 100%;
    font-family: 'Fira code', 'Fira Mono', monospace;
    font-size: 14px;

    .token.operator {
      background-color: transparent;
    }

    ${theme.dark &&
    css`
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
    `}

    textarea,
    pre {
      padding: 0.8rem 0.8rem 0 0.8rem !important;
    }

    textarea:focus {
      outline: none;
    }
  `
);
