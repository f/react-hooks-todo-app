import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoContext from "../src/TodoContext";
import * as svc from "../src/TodoService";
import TodoList from "../src/components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> #display", async () => {
  const todos = ["a", "b", "c"];
  const completeTodo = () => {};
  const list = mount(
    <TodoContext.Provider value={{ todos, completeTodo }}>
      <TodoList />
    </TodoContext.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual("<li>a<button>X</button></li>");
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual("<li>c<button>X</button></li>");
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const completeTodo = jest.fn();
  const list = mount(
    <TodoContext.Provider value={{ todos, completeTodo }}>
      <TodoList />
    </TodoContext.Provider>
  );

  list.find("button").forEach(b => b.simulate("click"));
  expect(completeTodo.mock.calls.length).toBe(3);
});

test("<TodoList /> #completeMutates", async () => {
  let todos = ["a", "b", "c"];
  const completeTodo = todo => {
    todos = svc.completeTodo(todos, todo);
  };
  const list = mount(
    <TodoContext.Provider value={{ todos, completeTodo }}>
      <TodoList />
    </TodoContext.Provider>
  );

  await list
    .find("button")
    .last()
    .simulate("click");
  expect(todos.length).toBe(2);
  expect(todos).toEqual(["a", "b"]);
});
