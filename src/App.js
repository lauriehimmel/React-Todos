import { useState } from "react";
import "./App.css";

import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";
import ToDoItem from "./ToDoItem";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Learn the MERN Stack", completed: false },
    { text: "Have Fun", completed: false }
  ]);
  const [showTodos, setShowTodos] = useState(true);

  function handleTodoClick(idx) {
    const allTodos = [...todos];
    if (allTodos[idx].completed) {
      allTodos.splice(idx, 1);
    } else {
      const updatedTodo = { ...todos[idx], completed: !todos[idx].completed };
      allTodos[idx] = updatedTodo;
    }

    setTodos(allTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do</h1>
        <button onClick={() => setShowTodos(!showTodos)}>
          {showTodos ? "HIDE" : "SHOW"}
        </button>
      </header>
      {showTodos && <ToDoList todos={todos} markCompleted={handleTodoClick} />}
      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
