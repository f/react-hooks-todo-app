// Service is a simple and immutable functional state manager.
// This functions must be highly testable that doesn't have any state.
export function addTodo(todos, todo) {
  return [...todos, todo];
}

// Naive implementation to make it work.
export function completeTodo(todos, todo) {
  return todos.filter(t => t !== todo);
}
