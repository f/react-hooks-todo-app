import { addTodo, completeTodo } from "../src/TodoService";

test("adds todo", async () => {
  const todos = ["a"];
  const newTodos = addTodo(todos, "b");

  expect(newTodos).toEqual(["a", "b"]);
});

test("completes todo", async () => {
  const todos = ["a", "b"];
  const newTodos = completeTodo(todos, "b");

  expect(newTodos).toEqual(["a"]);
});
