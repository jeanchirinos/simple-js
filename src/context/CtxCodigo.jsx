import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CtxCodigo = createContext();

export default function ContextoCodigo({ children }) {
  const codigoInicial = `num miNumero = 5;\ntxt miTexto = "Hola";\n\nfunc hola(){\n  num adios = 8;\n}`;

  const [codigo, setCodigo] = useState(codigoInicial);
  const [codigoCompilado, setCodigoCompilado] = useState(codigo);

  function borrarCodigo() {
    if (!codigo) return;

    setCodigo('');
    setCodigoCompilado('');
    toast('Código borrado', { icon: '🧹' });
  }

  return (
    <CtxCodigo.Provider
      value={{
        codigo,
        setCodigo,
        codigoCompilado,
        setCodigoCompilado,
        borrarCodigo,
      }}
    >
      {children}
    </CtxCodigo.Provider>
  );
}
