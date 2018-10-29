import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import Store from "./context";
import reducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    // Providing `useTodos(useState(useContext)))` combination
    // output as the current context which become
    // actually a state manager.
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
