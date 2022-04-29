import { AiOutlineClear } from 'react-icons/ai';

export default function ClearCodeButton({ setCode, setCompiledCode }) {
  function handleClick() {
    setCode('');
    setCompiledCode('');
  }

  return <AiOutlineClear title="Borra el código 🧹" onClick={handleClick} />;
}
