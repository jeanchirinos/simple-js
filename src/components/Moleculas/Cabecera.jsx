import LinkGithub from 'components/Atomos/LinkGithub';
import TemaSwitch from 'components/Atomos/TemaSwitch';
import { Flex } from 'components/StyledComponents';
import styled from 'styled-components/macro';

export default function Cabecera() {
  return (
    <S_CABECERA>
      <a href="/">
        <h1>Simple JS</h1>
      </a>
      <Flex as="aside" columnGap={1.5}>
        <TemaSwitch />
        <LinkGithub />
      </Flex>
    </S_CABECERA>
  );
}

const S_CABECERA = styled.header`
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
