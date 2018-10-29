import { addTodo, completeTodo } from "./TodoActions";

// useTodos is a simple function that gets `useState` output
// as the only parameter.
// This allows to manage a state.
// ```
// const todos = useTodos(useState())
// ```
// will make the `todos` variable a state manager.
export function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodo: todo => setTodos(addTodo(todos, todo)),
    completeTodo: todo => setTodos(completeTodo(todos, todo))
  };
}
