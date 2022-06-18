import { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

export default function NombreArchivo({ nombre, extension, setter }) {
  const input = useRef();

  useEffect(() => {
    input.current.style.width = input.current.value.length * 8.37 + 'px';
  }, [nombre]);

  function cambiarNombre(e) {
    let nombre = e.target.value;
    if (!nombre) return;

    setter(nombre);
  }

  function seleccionarInput() {
    input.current.focus();
  }

  return (
    <S_NOMBRE_ARCHIVO onClick={seleccionarInput}>
      <input
        ref={input}
        type="text"
        value={nombre}
        spellCheck={false}
        onChange={cambiarNombre}
      />
      <span>{extension}</span>
    </S_NOMBRE_ARCHIVO>
  );
}

const S_NOMBRE_ARCHIVO = styled.article`
  padding: 10px 50px 25px 25px;
  font-family: 'Fira code', 'Fira Mono', monospace;

  input {
    all: unset;
    font-size: 0.85rem;
    color: gray;
    max-width: calc(100% - 50px);
  }

  span {
    font-size: 0.85rem;
    color: gray;
  }
`;
