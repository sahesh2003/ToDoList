import React, {useEffect, useState} from 'react';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import {Todo} from "./types/todo";
import ToDoList from "./components/ToDoList";
import {useTheme} from "./ThemeContext";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [showCompleted, setShowCompleted] = useState(false)

    const { isNightMode, toggleNightMode } = useTheme();

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            text,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = showCompleted ? (todos.filter(todo => todo.completed)) : todos;

    const editTodo = (id: number, newText: string) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
        )
    }
  return (
      <div className={`App ${isNightMode ? "night-mode" : ""}`}>
          <button onClick={toggleNightMode} className={"nightModeButton"}>
              {isNightMode ? "Light Mode" : "Night Mode"}
          </button>
          <h1>
              To Do App
          </h1>
          <div className={"Form"}>
              <ToDoForm addToDo={addTodo}/>
              <button onClick={() => setShowCompleted(!showCompleted)} className={"completedTasksButton"}>
                  {
                      showCompleted ? "Show All Tasks" : "Show Completed Tasks"
                  }
              </button>
              <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}/>

          </div>
      </div>
  );
}

export default App;
