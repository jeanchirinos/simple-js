import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineClear } from 'react-icons/ai';

export default function ClearCodeButton() {
  const { code, clearCode } = useContext(Code);

  const className = code === '' && 'disabled';

  return (
    <AiOutlineClear
      title="Borra el código 🧹"
      onClick={clearCode}
      className={className}
    />
  );
}
