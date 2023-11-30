import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, toggleTodo, deleteTodo } = props;

  const parsedTodos =
    todos &&
    Object.values(todos).map((todo) => (
      <TodoListItem
        key={todo.id}
        {...todo}
        toggleTodo={() => toggleTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    ));

  return (
    <section className="TodoList">
      <h1>All todos</h1>
      <ul>{parsedTodos}</ul>
    </section>
  );
}
