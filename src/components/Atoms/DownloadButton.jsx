import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineDownload } from 'react-icons/ai';

export default function DownloadButton() {
  const { compiledCode } = useContext(Code);

  const compiledCorrectly = compiledCode.trim();
  const title = 'Descarga el código 🔻';

  if (compiledCorrectly) {
    return (
      <a
        href={`data:text/plain;charset=utf-8,${encodeURI(compiledCode)}`}
        download="archivo-comp.js"
        title={title}
      >
        <AiOutlineDownload />
      </a>
    );
  }

  return <AiOutlineDownload className="disabled" title={title} />;
}
