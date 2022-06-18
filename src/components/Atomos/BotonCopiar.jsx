import toast from 'react-hot-toast';
import { AiOutlineCopy } from 'react-icons/ai';

export default function BotonCopiar({ codigo }) {
  const icono = '📋';

  const codigoVacio = !codigo.trim();
  const clase = codigoVacio && 'deshabilitado';

  function copiarCodigo() {
    if (codigoVacio) return;

    navigator.clipboard.writeText(codigo);
    toast('Copiado', { icon: icono });
  }

  return (
    <AiOutlineCopy
      onClick={copiarCodigo}
      className={clase}
      title={`Copia el código ${icono}`}
    />
  );
}
