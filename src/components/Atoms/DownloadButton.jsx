import { AiOutlineDownload } from 'react-icons/ai';

export default function DownloadButton({ downloadValue }) {
  return (
    <a
      href={`data:text/plain;charset=utf-8,${encodeURIComponent(
        downloadValue
      )}`}
      download="archivo-comp.js"
      title="Descarga el código"
    >
      <AiOutlineDownload />
    </a>
  );
}
