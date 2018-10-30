import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../src/context";
import reducer from "../src/reducer";
import TodoList from "../src/components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> #display", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = () => {};
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual(
    '<li class="list-group-item">a<button class="float-right btn btn-danger btn-sm" style="margin-left: 10px;">Complete</button></li>'
  );
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual(
    '<li class="list-group-item">c<button class="float-right btn btn-danger btn-sm" style="margin-left: 10px;">Complete</button></li>'
  );
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  list.find("button").forEach(b => b.simulate("click"));
  expect(dispatch.mock.calls.length).toBe(3);
});

test("<TodoList /> #completeMutates", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = action => {
    state = reducer(state, action);
  };
  const list = mount(
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  await list
    .find("button")
    .last()
    .simulate("click");
  expect(state.todos.length).toBe(2);
  expect(state.todos).toEqual(["a", "b"]);
});
