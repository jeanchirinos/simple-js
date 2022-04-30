import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineDownload } from 'react-icons/ai';

export default function DownloadButton() {
  const { compiledCode } = useContext(Code);

  return (
    <a
      href={`data:text/plain;charset=utf-8,${encodeURI(compiledCode)}`}
      download="archivo-comp.js"
      title="Descarga el código 🔻"
    >
      <AiOutlineDownload />
    </a>
  );
}
