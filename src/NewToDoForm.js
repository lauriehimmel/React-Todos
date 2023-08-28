import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function newToDoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState({ text: "", completed: false });

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo({ text: "", completed: false });
  }
  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <input
          name="text"
          value={newTodo.text}
          onChange={(evt) => {
            // setNewTodo({ text: evt.target.value, completed: false });
            setNewTodo({ ...newTodo, [evt.target.name]: evt.target.value });
          }}
          placeholder="New To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </>
  );
}
