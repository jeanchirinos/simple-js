import styled from 'styled-components';
import { Flex } from 'components/StyledComponents';
import ThemeSwitcher from 'components/Atoms/ThemeSwitcher';
import GithubLink from 'components/Atoms/GithubLink';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <S_HEADER>
      <Link to="/">
        <h1>Simple JS</h1>
      </Link>
      <Flex as="aside" columnGap={1.5}>
        <ThemeSwitcher />
        <GithubLink />
      </Flex>
    </S_HEADER>
  );
}

const S_HEADER = styled.header`
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
