import { useState } from "react";

import "./ToDoItem.css";

export default function ToDoItem({
  todo,
  markCompleted,
  completed,
  index,
  ...props
}) {
  const bgColor = index % 2 ? "lavenderItem" : "plumItem";
  console.log(index, index % 2);

  return (
    <li onClick={markCompleted} className={"ToDoListItem ".concat(bgColor)}>
      <div className="flex-ctr-ctr">{index + 1}</div>
      <span style={{ textDecoration: completed ? "line-through" : "" }}>
        {" "}
        {todo}{" "}
      </span>
      <button
        className="check-btn"
        type="submit"
        style={{ display: completed ? "none" : "flex" }}
      >
        <span role="img">&#10003;</span>
      </button>
      <button
        className="remove-btn"
        type="submit"
        style={{ display: completed ? "flex" : "none" }}
      >
        <span role="img">Remove from list</span>
      </button>
      {/* </form> */}
    </li>
  );
}
