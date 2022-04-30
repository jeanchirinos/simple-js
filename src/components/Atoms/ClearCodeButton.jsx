import { useContext } from 'react';
import { Code } from 'context/CodeContext';
import { AiOutlineClear } from 'react-icons/ai';

export default function ClearCodeButton() {
  const { clearCode } = useContext(Code);

  return <AiOutlineClear title="Borra el código 🧹" onClick={clearCode} />;
}
