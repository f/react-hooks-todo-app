import { addTodo, completeTodo } from "./TodoService";

export function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodo: todo => setTodos(addTodo(todos, todo)),
    completeTodo: todo => setTodos(completeTodo(todos, todo))
  };
}
