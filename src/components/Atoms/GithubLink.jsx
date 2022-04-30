import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

export default function GithubLink() {
  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <S_GITHUBLINK className="muted-icon" />
    </a>
  );
}

const S_GITHUBLINK = styled(AiFillGithub)`
  font-size: 28px;
`;
