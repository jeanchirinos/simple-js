import { CtxCodigo } from 'context/CtxCodigo';
import { useContext } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

export default function BotonBorrar() {
  const { codigo, borrarCodigo } = useContext(CtxCodigo);

  const clase = !codigo && 'deshabilitado';

  return (
    <AiOutlineClear
      title="Borra el código 🧹"
      onClick={borrarCodigo}
      className={clase}
    />
  );
}
