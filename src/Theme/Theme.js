import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const defaultTheme = "dark-theme";
    const [theme, setTheme] = useState(defaultTheme);
    const toggleTheme = () => {
        setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    }
    
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}