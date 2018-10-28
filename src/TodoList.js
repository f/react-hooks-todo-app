import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export default function TodoList() {
  const { todos, completeTodo } = useContext(TodoContext);

  return (
    <div>
      <h1>{todos.length} Todos</h1>
      <ul>
        {todos.map(t => (
          <li key={t}>
            {t}
            <button onClick={completeTodo.bind(null, t)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
