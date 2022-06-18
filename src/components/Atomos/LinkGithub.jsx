import { AiFillGithub } from 'react-icons/ai';
import { css } from 'styled-components/macro';

export default function LinkGithub() {
  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillGithub className="icono-gris" css={estilos} />
    </a>
  );
}

const estilos = css`
  display: block;
  font-size: 28px;
`;
