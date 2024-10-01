import React, {FormEvent, useState} from "react";

interface ToDoFormProps {
    addToDo : (text: string) => void;
}
export default function ToDoForm({addToDo} : ToDoFormProps) {
    const [value, setValue] = useState("");
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(!value.trim()) return;
        addToDo(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={"Add something to do"}
            />
            <button type={"submit"}>Add</button>
        </form>
    )
}