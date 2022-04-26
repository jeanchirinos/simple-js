import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export default function ContextWrapper({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    getTheme();

    // TODO: Refactor code
    setTimeout(() => {
      document.body.style.visibility = 'visible';
      document.body.style.transition = 'background-color 0.3s, color 0.3s';
    }, 300);
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
    <ThemeContext.Provider value={{ darkTheme, getTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
