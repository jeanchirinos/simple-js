import { useState, createContext } from 'react';

export const Code = createContext();

export default function CodeContext({ children }) {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [compiledCode, setCompiledCode] = useState(code);

  function clearCode() {
    setCode('');
  }

  return (
    <Code.Provider
      value={{ code, setCode, compiledCode, setCompiledCode, clearCode }}
    >
      {children}
    </Code.Provider>
  );
}
