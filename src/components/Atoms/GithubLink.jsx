import { AiFillGithub } from 'react-icons/ai';

export default function GithubLink() {
  const props = {
    className: 'muted-icon',
    style: { fontSize: '28px' },
  };

  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillGithub {...props} />
    </a>
  );
}
