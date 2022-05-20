import React, { useState, useContext } from 'react';
import { Helmet } from "react-helmet";
import FormComponent from './components/FormComponent';
import TodoList from './components/TodoList';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeContext } from './Theme/Theme';
import './Theme/Theme.css';

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {id: todos.length + 1, task: todo, complete: false}]);
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? {...todo, complete: !todo.complete} : {...todo};
    }))
  }

  return (
    <div className={`App ${theme}`}>
      <Helmet>
        <style>
          {`body { background-color: ${theme === 'dark-theme' ? '#202020': '#EEEEEE'}; transition: 0.3s}`}
        </style>
      </Helmet>
      <Navbar />
      <FormComponent handleInput={addTodo}/>
      <div className="container">
        { 
        (todos.length > 0) 
          ? 
          (todos.map(todo => {
              return <TodoList key={todo.id} todo={todo} handleRemove={removeTodo} handleToggle={completeTodo}/>
            }))
          :
          (<div>
            <img src={require("./images/hero-removebg-preview.png")} alt="all tasks have done"></img>
            <p>Hooray! All task is done. Let's take a break.</p>
          </div>)
          
        }
      </div>

    </div>
  );
}

export default App;
