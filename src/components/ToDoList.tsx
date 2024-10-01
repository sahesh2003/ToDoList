import React from "react";
import {Todo} from "../types/todo";

interface ToDoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}
export default function ToDoList({ todos, toggleTodo, removeTodo } : ToDoListProps) {

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <p onClick={() => toggleTodo(todo.id)} style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        marginLeft: "10px",
                    }}>{todo.text}</p>
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}