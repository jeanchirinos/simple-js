import { createContext, useState, useEffect } from 'react';

export const Theme = createContext();

export default function ThemeContext({ children }) {
  const [darkTheme, setDarkTheme] = useState(undefined);

  useEffect(() => {
    getTheme();

    window.onload = () => {
      document.body.style.transition = 'background-color 0.3s, color 0.3s';
    };
  }, []);

  function getTheme() {
    if (localStorage.darkTheme) {
      const localDarkTheme = JSON.parse(localStorage.darkTheme);
      setDarkTheme(localDarkTheme);
      return;
    }

    setDarkTheme(true);
    localStorage.darkTheme = true;
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
