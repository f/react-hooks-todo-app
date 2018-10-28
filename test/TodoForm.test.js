import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoContext from "../src/TodoContext";
import TodoForm from "../src/components/TodoForm";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoForm/> #addTodo", async () => {
  const addTodo = jest.fn();
  const form = mount(
    <TodoContext.Provider value={{ addTodo }}>
      <TodoForm />
    </TodoContext.Provider>
  );

  form.find("input").simulate("change", { target: { value: "a new todo" } });
  form.find("button").simulate("click");

  expect(addTodo).toBeCalledWith("a new todo");
});
