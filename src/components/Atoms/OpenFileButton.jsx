import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineFolderOpen } from 'react-icons/ai';

export default function OpenFileButton() {
  const { uploadFile } = useContext(Code);

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
