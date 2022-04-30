import styled from 'styled-components';
import { Flex } from 'components/StyledComponents';
import ThemeSwitcher from 'components/Atoms/ThemeSwitcher';
import GithubLink from 'components/Atoms/GithubLink';

export default function Header() {
  return (
    <S_HEADER>
      <h1>Simple JS</h1>
      <Flex as="aside" columnGap={1.5}>
        <ThemeSwitcher />
        <GithubLink />
      </Flex>
    </S_HEADER>
  );
}

const S_HEADER = styled.header`
  height: 80px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
