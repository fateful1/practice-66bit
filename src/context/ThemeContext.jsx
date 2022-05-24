import { createContext } from "react";

export let ThemeContext = createContext({
    theme: JSON.parse(localStorage.getItem('theme')),
    setTheme: () => {},
})