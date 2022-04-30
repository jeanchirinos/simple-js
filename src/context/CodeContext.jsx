import { useState, createContext } from 'react';
import toast from 'react-hot-toast';

export const Code = createContext();

export default function CodeContext({ children }) {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [compiledCode, setCompiledCode] = useState(code);

  function clearCode() {
    if (!code) {
      toast('No hay código para borrar', { icon: '🧹' });
      return;
    }

    setCode('');
    setCompiledCode('');
    toast('Código borrado', { icon: '🧹' });
  }

  function uploadFile(e) {
    const file = e.dataTransfer?.files[0] || e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => {
      const fileContent = e.target.result;

      if (!fileContent) {
        toast('No hay contenido', { icon: '📄' });
        return;
      }

      const lines = fileContent.split(/\r\n|\n/);
      setCode(lines.join('\n'));
      setCompiledCode(lines.join('\n'));
      toast('Código cargado', { icon: '📄' });
    };

    reader.onerror = e => alert(e.target.error.name);

    reader.readAsText(file);
  }

  return (
    <Code.Provider
      value={{
        code,
        setCode,
        compiledCode,
        setCompiledCode,
        clearCode,
        uploadFile,
      }}
    >
      {children}
    </Code.Provider>
  );
}
