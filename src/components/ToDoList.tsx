import React, {useState} from "react";
import {Todo} from "../types/todo";
import {text} from "node:stream/consumers";

interface ToDoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}
export default function ToDoList({ todos, toggleTodo, removeTodo, editTodo } : ToDoListProps) {

    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>("");

    const handleEditClick = (id: number, currentText: string) => {
        setEditId(id);
        setEditText(currentText);
    }

    const handleSaveClick = (id: number) => {
        editTodo(id, editText);
        setEditId(null);
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    {editId === todo.id ?
                        (
                            <input
                                type={"text"}
                                value={editText}
                                className={"editTextInput"}
                                onChange={(e) => setEditText(e.target.value)
                            }/>
                        ) :
                            <p onClick={() => toggleTodo(todo.id)} style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                marginLeft: "10px",
                            }}>{todo.text}</p>

                    }
                    {editId === todo.id ? (
                        <button onClick={() => handleSaveClick(todo.id)}>Save</button>
                    ) : (
                        <>
                            <button onClick={() => handleEditClick(todo.id, todo.text)} style={{ marginLeft: "10px" }}>
                                Edit
                            </button>
                            <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: "10px" }}>
                                Remove
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}