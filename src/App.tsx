import React, {useState} from 'react';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import {Todo} from "./types/todo";
import ToDoList from "./components/ToDoList";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div className="App">
      <h1>
        To Do App
      </h1>
        <ToDoForm addToDo={addTodo} />
        <ToDoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
