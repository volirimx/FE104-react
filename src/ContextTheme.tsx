import { createContext } from "react";

const ContextTheme = createContext({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
});

export default ContextTheme;
