import { useState, createContext } from 'react';
import toast from 'react-hot-toast';

export const Code = createContext();

export default function CodeContext({ children }) {
  const [code, setCode] = useState(`if(a>b && a >0) {\nc = a – b;\n}`);
  const [compiledCode, setCompiledCode] = useState(code);

  function clearCode() {
    if (!code) return;

    setCode('');
    setCompiledCode('');
    toast('Código borrado', { icon: '🧹' });
  }

  function uploadFile(e) {
    const file = e.dataTransfer?.files[0] || e.target.files[0];

    if (!file) return;

    if (file.type !== 'text/plain' && file.type !== 'text/javascript') {
      toast.error('Sube un archivo .txt o .js', {
        duration: 3000,
        className: 'toast error',
      });

      return;
    }

    const reader = new FileReader();

    reader.onload = e => {
      const fileContent = e.target.result;

      const lines = fileContent.split(/\r\n|\n/);
      setCode(lines.join('\n'));
      setCompiledCode(lines.join('\n'));
      toast('Código cargado', { icon: '📁' });
    };

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
