import { CtxArchivo } from 'context/CtxArchivo';
import { useContext } from 'react';
import { AiOutlineFolderOpen } from 'react-icons/ai';

export default function BotonAbrir() {
  const { subirArchivo } = useContext(CtxArchivo);

  function abrirExplorador() {
    const inputArchivo = document.getElementById('inputArchivo');

    inputArchivo.value = null;
    inputArchivo.click();
  }

  return (
    <>
      <input
        type="file"
        id="inputArchivo"
        hidden
        accept=".sjs, .txt"
        onChange={subirArchivo}
      />
      <AiOutlineFolderOpen
        onClick={abrirExplorador}
        title="Abre un archivo 📁"
      />
    </>
  );
}
