import React, { useContext } from "react";
import Store from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  let header =
    state.todos.length === 0 ? (
      <h1>Yay! All todos are done! Take a rest!</h1>
    ) : (
      <h1>{state.todos.length} Todos</h1>
    );

  return (
    <div>
      {header}
      <ul>
        {state.todos.map(t => (
          <li key={t}>
            {t}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => dispatch({ type: "COMPLETE", payload: t })}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
