import { AiFillGithub } from 'react-icons/ai';

export default function GithubLink() {
  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillGithub className="muted-icon" style={{ fontSize: '28px' }} />
    </a>
  );
}
