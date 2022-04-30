import { AiOutlineCopy } from 'react-icons/ai';

export default function CopyButton({ copyValue }) {
  return (
    <AiOutlineCopy
      onClick={() => navigator.clipboard.writeText(copyValue)}
      title="Copia el código ✂️"
    />
  );
}
