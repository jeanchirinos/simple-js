import styled, { css } from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

export default function GithubLink() {
  return (
    <a
      href="https://github.com/jeanchirinos/simple-js"
      target="_blank"
      rel="noreferrer"
    >
      <S_GITHUBLINK />
    </a>
  );
}

const S_GITHUBLINK = styled(AiFillGithub)(
  ({ theme }) => css`
    color: gray;
    font-size: 28px;
    transition: color 0.3s;

    :hover {
      color: ${theme.opposite.primary};
    }
  `
);
