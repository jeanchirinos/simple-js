import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineFolderOpen } from 'react-icons/ai';

export default function OpenFileButton() {
  const { setCode, setCompiledCode } = useContext(Code);

  function uploadFile(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => {
      const fileContent = e.target.result;
      const lines = fileContent.split(/\r\n|\n/);
      setCode(lines.join('\n'));
      setCompiledCode(lines.join('\n'));
    };

    reader.onerror = e => alert(e.target.error.name);

    reader.readAsText(file);
  }

  function handleClick() {
    const inputFile = document.getElementById('inputFile');

    inputFile.value = null;
    inputFile.click();
  }

  return (
    <>
      <input
        type="file"
        id="inputFile"
        hidden
        accept=".js, .txt"
        onChange={uploadFile}
      />
      <AiOutlineFolderOpen onClick={handleClick} title="Abre un archivo 📄" />
    </>
  );
}
