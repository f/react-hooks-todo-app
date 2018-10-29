import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { useTodos } from "./TodoHooks";

import TodoContext from "./TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  // create a global store to store the state
  const globalStore = useState(useContext(TodoContext));
  // `todos` will be a state manager to manage state.
  const todos = useTodos(globalStore);

  return (
    // Providing `useTodos(useState(useContext)))` combination
    // output as the current context which become
    // actually a state manager.
    <TodoContext.Provider value={todos}>
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
