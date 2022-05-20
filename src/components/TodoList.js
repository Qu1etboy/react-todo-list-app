import { useContext } from 'react';
import { ThemeContext } from '../Theme/Theme';
import './TodoList.css';

const TodoList = (props) => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const {todo, handleRemove, handleToggle} = props;
    
    const removeTodo = () => {
        handleRemove(todo);
    }
    
    const toggleCheckbox = () => {
        handleToggle(todo.id);
    }

    return (
        <div className={`box ${todo.complete ? "box-done": ""}`}>
            <div className="todo-detail">
                <input 
                type="checkbox" 
                onClick={toggleCheckbox} 
                checked={todo.complete}
                >
                </input>
                <p>{todo.task}</p>
            </div>
            <button className="btn" onClick={removeTodo}>Remove</button>
        </div>
    )

} 

export default TodoList;