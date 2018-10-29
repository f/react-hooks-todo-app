# React Hooks Todo App

> A trial to achieve a correct approach. Trying to get **rid off using Redux**, make **contexts more useful** and make components **"easy-to-test simple functions"**.

[![Edit react-usecontext-todo-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/f/react-hooks-todo-app/tree/master/)

---

A **highly decoupled**, **testable** TodoList app that uses React hooks.

This is a training repo to learn about new hooks feature of React and creating a testable environment.

- **No** class components
- Uses `Context` to share a **global state** and the **state actions**
- `useState` to create local state
- Custom hook
- Decoupled state logic (Actions)
- Testable components (Uses Jest + Enzyme for tests)

For better approaches please open Pull Requests

## Summary

1. **Context**: The main approach was to get rid off Redux and use **React Contexts** instead. With the composition of `useState`, `useContext` I created a global state. And passed it into a **custom hook** called `useTodos`. `useTodos` curries `useState` output and generates a state manager which will be passed into `TodoContext.Provider` to be used as a global state.

```jsx
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
```

2. **The Actions**: The second approach was to seperate the main logic, just as the **actions** of Redux. But these are fully functional, every function returns whole state.

```js
// Actions is a simple and immutable functional state manager.
// This functions must be highly testable that doesn't have any state.
export function addTodo(todos, todo) {
  return [...todos, todo];
}

// Naive implementation to make it work.
export function completeTodo(todos, todo) {
  return todos.filter(t => t !== todo);
}
```

3. **`useTodos` Hook**: The third approach is to generate a custom hook that manages the `state`. It's basically a **state composer** that includes functions to manage state with the help of **the actions**.

```js
export function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodo: todo => setTodos(addTodo(todos, todo)),
    completeTodo: todo => setTodos(completeTodo(todos, todo))
  };
}
```

4. I reach out **actions** of context using `useContext` and I can reach to the `useTodos` methods.

```js
import React, { useContext, useState } from "react";
import TodoContext from "../TodoContext";

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  ...
```

So, the **addTodo** basically runs the action and mutates the state.

5. **Everything is testable decoupled**: The last but most important part of the approach is to make all the parts testable. They don't tie to eachother which makes me to write tests easily.

## License
MIT
