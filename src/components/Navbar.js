import ThemeToggle from "./ThemeToggle";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <h1>Todo List</h1>
                <ThemeToggle />
            </ul>
        </div>
    )
}

export default Navbar;