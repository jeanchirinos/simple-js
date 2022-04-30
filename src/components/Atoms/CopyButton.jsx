import toast from 'react-hot-toast';
import { AiOutlineCopy } from 'react-icons/ai';

export default function CopyButton({ copyValue }) {
  function handleCopy() {
    if (!copyValue) {
      toast('No hay código para copiar', { icon: '📋' });
      return;
    }

    navigator.clipboard.writeText(copyValue);
    toast('Copiado', { icon: '📋' });
  }

  return <AiOutlineCopy onClick={handleCopy} title="Copia el código 📋" />;
}
