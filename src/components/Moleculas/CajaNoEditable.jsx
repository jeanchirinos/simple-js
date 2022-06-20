import BotonCopiar from 'components/Atomos/BotonCopiar';
import BotonDescargar from 'components/Atomos/BotonDescargar';
import EditorDeCodigo from 'components/Atomos/EditorDeCodigo';
import NombreArchivo from 'components/Atomos/NombreArchivo';
import { S_CAJA_CODIGO } from 'components/StyledComponents';
import { CtxCodigo } from 'context/CtxCodigo';
import useArchivo from 'hooks/useArchivo';
import { useContext } from 'react';
import { S_BOTONES } from 'components/StyledComponents';

export default function CajaNoEditable() {
  const { nombreDeArchivoCompilado, setNombreDeArchivoCompilado } =
    useArchivo();
  const { codigoCompilado } = useContext(CtxCodigo);

  const extension = '.js';

  return (
    <S_CAJA_CODIGO>
      <NombreArchivo
        nombre={nombreDeArchivoCompilado}
        setter={setNombreDeArchivoCompilado}
        extension={extension}
      />
      <div>
        <EditorDeCodigo.NoEditable />
      </div>
      <S_BOTONES>
        <BotonCopiar codigo={codigoCompilado} />
        <BotonDescargar
          codigo={codigoCompilado}
          nombreDeArchivo={nombreDeArchivoCompilado}
          extension={extension}
        />
      </S_BOTONES>
    </S_CAJA_CODIGO>
  );
}
