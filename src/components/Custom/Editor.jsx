import { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { S_EDITOR } from 'components/Atoms/CodeBox';
import toast from 'react-hot-toast';
import { S_CODE_EDITOR_BOX } from 'components/Molecules/CodeEditor';
import { S_CODE_EDITOR_ACTIONS } from 'components/Molecules/CodeActions';

import CopyButton from 'components/Atoms/CopyButton';
// OnpenFileButton
import { AiOutlineFolderOpen } from 'react-icons/ai';
// ClearCodeButton
import { AiOutlineClear } from 'react-icons/ai';

export default function Editor({ code, setCode }) {
  const highlightWithLineNumbers = input =>
    highlight(input, languages.js)
      .split('\n')
      .map((line, i) => `<span class='lineNumber'>${i + 1}</span>${line}`)
      .join('\n');

  const [isDraggingOver, setIsDraggingOver] = useState(false);

  function handleDragOver(e) {
    e.preventDefault();
    if (e.dataTransfer.types[0] === 'Files') {
      !isDraggingOver && setIsDraggingOver(true);
    }
  }

  function handleDrop(e) {
    e.preventDefault();

    if (isDraggingOver) {
      setIsDraggingOver(false);
      uploadFile(e);
    }
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
      toast('Código cargado', { icon: '📁' });
    };

    reader.readAsText(file);
  }
  // OpenFileButton

  function handleOpenFile() {
    const inputFile = document.getElementById('inputFile');

    inputFile.value = null;
    inputFile.click();
  }
  // OpenFileButton

  // ClearCodeButton
  function handleClearCode() {
    setCode('');
    toast('Código borrado', { icon: '🧹' });
  }

  return (
    <S_CODE_EDITOR_BOX
      isDraggingOver={isDraggingOver}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={handleDrop}
    >
      <span>Suelta el archivo</span>
      <div>
        <S_EDITOR
          placeholder="Escribe aquí..."
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlightWithLineNumbers(code)}
        />
        <S_CODE_EDITOR_ACTIONS>
          <CopyButton copyValue={code} />
          <>
            <input
              type="file"
              id="inputFile"
              hidden
              accept=".js, .txt"
              onChange={uploadFile}
            />
            <AiOutlineFolderOpen
              onClick={handleOpenFile}
              title="Abre un archivo 📁"
            />
          </>
          <AiOutlineClear
            title="Borra el código 🧹"
            onClick={handleClearCode}
            className={!code && 'disabled'}
          />
        </S_CODE_EDITOR_ACTIONS>
      </div>
    </S_CODE_EDITOR_BOX>
  );
}
