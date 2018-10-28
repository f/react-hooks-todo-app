import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoContext from "../src/TodoContext";
import TodoList from "../src/components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList/> #display", async () => {
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

test("<TodoLits /> #complete", async () => {
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
