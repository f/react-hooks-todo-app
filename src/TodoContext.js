import React from "react";

// Context is the global state to manage the todo list.
// This will be rewritten by the App that will use `useTodos`
// hook to manage context. Current value will be initial.
const TodoContext = React.createContext([
  // Initial Data
  "Buy milk",
  "Some eggs",
  "Go to work"
]);

export default TodoContext;
