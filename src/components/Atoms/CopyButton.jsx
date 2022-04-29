import { AiOutlineCopy } from 'react-icons/ai';

export default function CopyButton({ code }) {
  return (
    <AiOutlineCopy
      onClick={() => navigator.clipboard.writeText(code)}
      title="Copia el código ✂️"
    />
  );
}
