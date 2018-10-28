import React from "react";

const TodoContext = React.createContext([
  // Initial Data
  "Buy milk",
  "Some eggs",
  "Go to work"
]);

export default TodoContext;
