import BotonAbrir from 'components/Atomos/BotonAbrir';
import BotonBorrar from 'components/Atomos/BotonBorrar';
import BotonCopiar from 'components/Atomos/BotonCopiar';
import BotonDescargar from 'components/Atomos/BotonDescargar';
import EditorDeCodigo from 'components/Atomos/EditorDeCodigo';
import NombreArchivo from 'components/Atomos/NombreArchivo';
import { S_BOTONES } from 'components/StyledComponents';
import { CtxArchivo } from 'context/CtxArchivo';
import { CtxCodigo } from 'context/CtxCodigo';
import { useContext } from 'react';
import { S_CAJA_EDITABLE } from './_CajaEditable';

export default function CajaEditable() {
  const {
    alArrastrar,
    alSoltar,
    nombreDeArchivo,
    setNombreDeArchivo,
    arrastrando,
    setArrastrando,
  } = useContext(CtxArchivo);

  const { codigo } = useContext(CtxCodigo);

  const extension = '.sjs';

  return (
    <S_CAJA_EDITABLE
      arrastrando={arrastrando}
      onDragOver={alArrastrar}
      onDragLeave={() => setArrastrando(false)}
      onDrop={alSoltar}
    >
      <span>Suelta el archivo</span>
      <NombreArchivo
        nombre={nombreDeArchivo}
        setter={setNombreDeArchivo}
        extension={extension}
      />

      <div>
        <EditorDeCodigo.Editable />
      </div>
      <S_BOTONES>
        <BotonCopiar codigo={codigo} />
        <BotonAbrir />
        <BotonBorrar />
        <BotonDescargar
          codigo={codigo}
          nombreDeArchivo={nombreDeArchivo}
          extension={extension}
        />
      </S_BOTONES>
    </S_CAJA_EDITABLE>
  );
}
