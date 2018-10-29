import reducer from "../src/reducer";

test("adds todo", async () => {
  const state = { todos: ["a"] };
  const newState = reducer(state, { type: "ADD_TODO", payload: "b" });

  expect(newState.todos).toEqual(["a", "b"]);
});

test("completes todo", async () => {
  const state = { todos: ["a", "b"] };
  const newState = reducer(state, { type: "COMPLETE", payload: "b" });

  expect(newState.todos).toEqual(["a"]);
});
