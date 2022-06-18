import toast from 'react-hot-toast';
import { AiOutlineDownload } from 'react-icons/ai';

export default function BotonDescargar({ codigo, nombreDeArchivo, extension }) {
  const icono = '⬇️';

  const codigoVacio = !codigo.trim();
  const clase = codigoVacio && 'deshabilitado';

  const codigoDescargable = `data:text/plain;charset=utf-8,${encodeURIComponent(
    codigo
  )}`;

  function descargar(e) {
    if (codigoVacio) {
      e.preventDefault();
      return;
    }

    toast('Código descargado', { icon: icono });
  }

  return (
    <a
      href={codigoDescargable}
      download={nombreDeArchivo + extension}
      title={`Descarga el código ${icono}`}
      onClick={descargar}
    >
      <AiOutlineDownload className={clase} />
    </a>
  );
}
