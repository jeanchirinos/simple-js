import { S_SECCION } from 'components/StyledComponents';
import CajaEditable from 'components/Moleculas/CajaEditable';
import CajaNoEditable from 'components/Moleculas/CajaNoEditable';

export default function SeccionCodigo() {
  return (
    <S_SECCION className="pantalla-completa">
      <CajaEditable />
      <CajaNoEditable />
    </S_SECCION>
  );
}
