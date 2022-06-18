import { useContext, useEffect } from 'react';
import { CtxCodigo } from 'context/CtxCodigo';
import { S_EDITOR, customizarEditor } from './_EditorDeCodigo';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
// Mantener orden de importación para editor

function Editable() {
  const { codigo, setCodigo, setCodigoCompilado } = useContext(CtxCodigo);

  function compilarCodigo(codigo) {
    setCodigo(codigo);
    setCodigoCompilado(codigo);
  }

  return (
    <S_EDITOR
      placeholder="Escribe aquí..."
      value={codigo}
      onValueChange={codigo => compilarCodigo(codigo)}
      highlight={codigo => customizarEditor(codigo)}
    />
  );
}

function NoEditable() {
  const { codigoCompilado } = useContext(CtxCodigo);

  useEffect(() => {
    const areaNoEditable = document.getElementById('area-no-editable');
    areaNoEditable.setAttribute('readonly', true);
  }, []);

  return (
    <S_EDITOR
      value={codigoCompilado}
      highlight={codigoCompilado => customizarEditor(codigoCompilado)}
      textareaId="area-no-editable"
    />
  );
}

const EditorDeCodigo = {
  Editable,
  NoEditable,
};

export default EditorDeCodigo;
