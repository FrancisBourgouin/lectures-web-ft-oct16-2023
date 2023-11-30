// {
//   "id": 1,
//   "task": "Watch Nightmare Before Christmas",
//   "dueDate": "2023-12-02",
//   "color": "red",
//   "isComplete": false
// }

export default function TodoListItem(props) {
  const { task, dueDate, color, isComplete, toggleTodo, deleteTodo } = props;

  const parsedDate = new Date(dueDate);

  const style = { borderColor: color };

  return (
    <li className="TodoListItem" style={style}>
      <span>{task}</span>
      <span>{parsedDate.toLocaleDateString()}</span>
      {isComplete && <button onClick={toggleTodo}>Mark as incomplete</button>}
      {!isComplete && <button onClick={toggleTodo}>Mark as complete</button>}
      {isComplete && <button onClick={deleteTodo}>Delete</button>}
      {/* <button>Edit</button> */}
    </li>
  );
}
