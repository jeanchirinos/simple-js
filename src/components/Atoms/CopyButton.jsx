import toast from 'react-hot-toast';
import { AiOutlineCopy } from 'react-icons/ai';

export default function CopyButton({ copyValue }) {
  const icon = '📋';

  const codeIsEmpty = !copyValue.trim();
  const className = codeIsEmpty && 'disabled';

  function handleCopy() {
    if (codeIsEmpty) return;

    navigator.clipboard.writeText(copyValue);
    toast('Copiado', { icon });
  }

  return (
    <AiOutlineCopy
      onClick={handleCopy}
      className={className}
      title={`Copia el código ${icon}`}
    />
  );
}
