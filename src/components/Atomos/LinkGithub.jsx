import { AiFillGithub } from 'react-icons/ai';

export default function LinkGithub() {
  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillGithub className="icono-gris" size={28} />
    </a>
  );
}
