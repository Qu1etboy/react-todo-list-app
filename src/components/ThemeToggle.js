import { useContext } from "react";
import { ThemeContext } from "../Theme/Theme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    
    return (
        <div>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'dark-theme' ? 'Dark mode' : 'Light mode'}
            </button>
        </div>
    )
}

export default ThemeToggle;