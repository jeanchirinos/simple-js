import { AiOutlineDownload } from 'react-icons/ai';

export default function DownloadButton({ code }) {
  return (
    <a
      href={`data:text/plain;charset=utf-8,${encodeURI(code)}`}
      download="archivo-comp.js"
      title="Descarga el código 🔻"
    >
      <AiOutlineDownload />
    </a>
  );
}
