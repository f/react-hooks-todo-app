import React, { useContext } from "react";
import TodoContext from "../TodoContext";

export default function TodoList() {
  const { todos, completeTodo } = useContext(TodoContext);

  let header =
    todos.length === 0 ? (
      <h1>Yay! All todos are done! Take a rest!</h1>
    ) : (
      <h1>{todos.length} Todos</h1>
    );

  return (
    <div>
      {header}
      <ul>
        {todos.map(t => (
          <li key={t}>
            {t}
            <button
              style={{ marginLeft: 10 }}
              onClick={completeTodo.bind(null, t)}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
