# React Hooks Todo App

> A trial to achieve a correct approach. Trying to get **rid off using Redux**, make **contexts more useful** with **useReducer** and make components **"easy-to-test simple functions"**.

[![Edit react-usecontext-todo-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/f/react-hooks-todo-app/tree/master/)

---

A **highly decoupled**, **testable** TodoList app that uses React hooks.

This is a training repo to learn about new hooks feature of React and creating a testable environment.

- **Zero-dependency**
- **No** class components
- Uses `Context` to share a **global state**
- Uses `useReducer` to manage **state actions**
- `useState` to create local state
- Decoupled state logic (Actions)
- Testable components (Uses Jest + Enzyme for tests)
- Custom Hooks for **persisting state**.

For better approaches please open Pull Requests

## Summary

### 1. **Context**:

The main approach was to get rid off Redux and use **React Contexts** instead. With the composition of `useState`, `useContext` I created a global state. And passed it into a **custom hook** called `useTodos`. `useTodos` curries `useState` output and generates a state manager which will be passed into `TodoContext.Provider` to be used as a global state.

```jsx
function App() {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </Store.Provider>
  );
}
```

### 2. **The Reducer**:

The second approach was to seperate the main logic, just as the **actions** of Redux. But these are fully functional, every function returns whole state.

```js
// Reducer is the classical reducer that we know from Redux.
// used by `useReducer`
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload)
      };
    default:
      return state;
  }
}
```

### 3. **State and Dispatcher**

I reach out **state and dispathcer** of context using `useContext` and I can reach to the `actions`.

```js
import React, { useContext } from "react";
import Store from "../context";

export default function TodoForm() {
  const { state, dispatch } = useContext(Store);
  // use `state.todos` to get todos
  // use `dispatch({ type: 'ADD_TODO', payload: 'Buy milk' })`
```

### 4. **Persistence with custom hooks**:

I created custom hooks to persist state on `localStorage`

```js
import { useEffect } from "react";

// Accepts `useContext` as first parameter and returns cached context.
export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

// Accepts `useReducer` as first parameter and returns cached reducer.
export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
```

The `App` function will be:

```js
function App () {
  const globalStore = usePersistedContext(useContext(Store));

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore));
```

### 5. **Everything is testable decoupled**:

The last but most important part of the approach is to make all the parts testable. They don't tie to eachother which makes me to write tests easily.

## License
MIT
