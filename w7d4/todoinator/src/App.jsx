import { useState } from "react";
import useWow from "./hooks/useWow";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";

import { todo1, todo2, todosObj } from "./data/todoData";

// const fakeToggle = (todoId) => console.log("function toggle was called", todoId);
// const fakeDelete = (todoId) => console.log("function delete was called", todoId);
// const fakeSubmit = (todoInfo) => console.log("function submit was called", todoInfo);

import * as todoHelpers from "./helpers/todoHelpers";

function App() {
  const [todos, setTodos] = useState(todosObj);
  const { sayWow } = useWow();

  const toggleTodo = (todoId) => {
    const updatedTodos = todoHelpers.toggle(todos, todoId);

    setTodos(updatedTodos);
  };

  const addTodo = (todoInfo) => {
    const updatedTodos = todoHelpers.add(todos, todoInfo);

    setTodos(updatedTodos);
    sayWow();
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todoHelpers.delete(todos, todoId);

    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <main>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </main>
      <Footer />
    </>
  );

  // return <TodoForm onSubmit={fakeSubmit} />;

  // return <TodoList todos={todosObj} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />;

  // return <TodoListItem {...todo1} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />;
}

export default App;
