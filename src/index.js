import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { useTodos } from "./TodoHooks";

import TodoContext from "./TodoContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const todos = useTodos(useState(useContext(TodoContext)));
  return (
    <TodoContext.Provider value={todos}>
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
