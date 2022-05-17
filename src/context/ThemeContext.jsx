import { createContext, useState, useLayoutEffect } from 'react';

export const Theme = createContext();

export default function ThemeContext({ children }) {
  const [darkTheme, setDarkTheme] = useState(undefined);

  useLayoutEffect(() => {
    getTheme();

    window.onload = () => {
      document.body.classList.add('withTransition');
    };
  }, []);

  function getTheme() {
    if (localStorage.darkTheme) {
      const localDarkTheme = JSON.parse(localStorage.darkTheme);
      setDarkTheme(localDarkTheme);
    } else {
      setDarkTheme(true);
      localStorage.darkTheme = true;
    }
  }

  function toggleTheme() {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  }

  return (
    <Theme.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
}
