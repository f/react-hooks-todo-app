import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { useTodos } from "./TodoHooks";

import TodoContext from "./TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  // `todos` will be a state manager to manage state.
  const todos = useTodos(useState(useContext(TodoContext)));
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
