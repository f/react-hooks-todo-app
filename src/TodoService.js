export function addTodo(todos, todo) {
  return [...todos, todo];
}

export function completeTodo(todos, todo) {
  return todos.filter(t => t !== todo);
}
