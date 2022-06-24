import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { CtxCodigo } from './CtxCodigo';

export const CtxArchivo = createContext();

export default function ContextoArchivo({ children }) {
  const [arrastrando, setArrastrando] = useState(false);

  const [nombreDeArchivo, setNombreDeArchivo] = useState('archivo');
  const [nombreDeArchivoCompilado, setNombreDeArchivoCompilado] =
    useState('archivo-compilado');

  const { setCodigo } = useContext(CtxCodigo);

  function subirArchivo(e) {
    const archivo = e.dataTransfer?.files[0] || e.target.files[0];

    if (!archivo) return;

    const extensionCorrecta = /\.(sjs|txt)$/.test(archivo.name);

    if (!extensionCorrecta) {
      toast.error('Sube un archivo .sjs o .txt', {
        duration: 3000,
        className: 'notificador error',
      });

      return;
    }

    const archivoSinExtension = archivo.name.replace(/\.(sjs|txt)$/, '');

    setNombreDeArchivo(archivoSinExtension);
    setNombreDeArchivoCompilado(archivoSinExtension);

    const lector = new FileReader();

    lector.onload = e => {
      const contenido = e.target.result;
      setCodigo(contenido);

      toast('Código cargado', { icon: '📁' });
    };

    lector.readAsText(archivo);
  }

  function alArrastrar(e) {
    e.preventDefault();
    if (e.dataTransfer.types[0] === 'Files') {
      !arrastrando && setArrastrando(true);
    }
  }

  function alSoltar(e) {
    e.preventDefault();

    if (arrastrando) {
      setArrastrando(false);
      subirArchivo(e);
    }
  }

  const value = {
    nombreDeArchivo,
    setNombreDeArchivo,
    nombreDeArchivoCompilado,
    setNombreDeArchivoCompilado,
    arrastrando,
    setArrastrando,
    alArrastrar,
    alSoltar,
    subirArchivo,
  };

  return <CtxArchivo.Provider value={value}>{children}</CtxArchivo.Provider>;
}
