import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const defaultTheme = "dark-theme";
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    });
    
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme])
    
    const toggleTheme = () => {
        setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    }
    
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}