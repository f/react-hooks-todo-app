import React, { useContext, useState } from "react";
import TodoContext from "../TodoContext";

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);

  // Local state
  const [todo, setTodo] = useState();

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    addTodo(todo);
    setTodo("");
  }

  return (
    <div>
      <input value={todo} onChange={handleTodoChange} />
      <button onClick={handleTodoAdd}>Add</button>
    </div>
  );
}
