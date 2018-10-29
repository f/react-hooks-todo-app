import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm() {
  const { dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState();

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  return (
    <div>
      <input value={todo} onChange={handleTodoChange} />
      <button onClick={handleTodoAdd}>Add</button>
    </div>
  );
}
