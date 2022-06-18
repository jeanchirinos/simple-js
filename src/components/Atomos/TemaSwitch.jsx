import { CtxTema } from 'context/CtxTema';
import { useContext } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import styled, { css } from 'styled-components/macro';

export default function TemaSwitch() {
  const { cambiarTema } = useContext(CtxTema);

  return (
    <S_TEMA_SWITCH onClick={cambiarTema} title="Cambia el tema 🌔">
      <HiOutlineMoon />
      <HiOutlineSun />
    </S_TEMA_SWITCH>
  );
}

const S_TEMA_SWITCH = styled.div(
  ({ theme }) => css`
    width: 48px;
    height: 28px;
    background-color: ${theme.oscuro ? '#aeae19' : '#ACABAC'};
    color: white;
    border-radius: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    transition: background-color var(--transition-t);
    cursor: pointer;

    :after {
      content: '';
      background-color: white;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      position: absolute;
      left: 3px;
      transform: ${theme.oscuro && 'translateX(24px)'};
      transition: transform var(--transition-t);
    }
  `
);
