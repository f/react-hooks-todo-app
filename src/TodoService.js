function addTodo(todos, todo) {
  return [...todos, todo];
}

function completeTodo(todos, todo) {
  return todos.filter(t => t !== todo);
}

export { addTodo, completeTodo };
