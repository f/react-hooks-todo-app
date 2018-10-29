import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    "Buy milk",
    "Some eggs",
    "Go to work"
  ]
});

export default Store;
