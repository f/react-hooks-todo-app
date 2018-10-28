import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

const TodoContext = React.createContext();

function addTodo(todos, todo) {
  return [...todos, todo];
}

function completeTodo(todos, todo) {
  return todos.filter(t => t !== todo);
}

function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodo: todo => setTodos(addTodo(todos, todo)),
    completeTodo: todo => setTodos(completeTodo(todos, todo))
  };
}

function TodoList() {
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

function TodoForm() {
  const { addTodo } = useContext(TodoContext);

  // Local state
  const [todo, setTodo] = useState();

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    addTodo(todo);
    setTodo("");
  }

  return (
    <div>
      <input value={todo} onChange={handleTodoChange} />
      <button onClick={handleTodoAdd}>Add</button>
    </div>
  );
}

function App() {
  const todos = useTodos(useState(["Buy milk", "Some eggs"]));
  return (
    <TodoContext.Provider value={todos} className="App">
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
