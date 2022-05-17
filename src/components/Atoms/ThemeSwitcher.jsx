import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'context/ThemeContext';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(Theme);

  return (
    <S_THEMESWITCHER onClick={toggleTheme} title="Cambia el tema 🌔">
      <HiOutlineMoon />
      <HiOutlineSun />
    </S_THEMESWITCHER>
  );
}

const S_THEMESWITCHER = styled.div(
  ({ theme }) => css`
    width: 48px;
    height: 28px;
    background-color: ${theme.dark ? '#aeae19' : '#ACABAC'};
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
      /* left: 3px;
      transform: ${theme.dark && 'translateX(24px)'};
      transition: transform var(--transition-t); */
      left: ${theme.dark ? '27px' : '3px'};
      transition: left var(--transition-t);
    }
  `
);
