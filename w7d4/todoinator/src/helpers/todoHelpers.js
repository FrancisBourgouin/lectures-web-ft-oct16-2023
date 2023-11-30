export const add = (todos, todoInfo) => {
  const { task, dueDate, color } = todoInfo;
  const id = Math.floor(Math.random() * 3272341390831);

  const newTodo = { id, task, dueDate, color, isComplete: false };

  const updatedTodos = { ...todos, [id]: newTodo };

  return updatedTodos;
};

export const edit = (todos, todoId, todoInfo) => {
  const { task, dueDate, color } = todoInfo;

  const updatedTodo = { ...todos[todoId], task, dueDate, color };

  const updatedTodos = { ...todos, [todoId]: updatedTodo };

  return updatedTodos;
};

export const remove = (todos, todoId) => {
  const updatedTodos = { ...todos };

  delete updatedTodos[todoId];

  return updatedTodos;
};

export const toggle = (todos, todoId) => {
  const updatedTodo = { ...todos[todoId] };

  updatedTodo.isComplete = !updatedTodo.isComplete;

  const updatedTodos = { ...todos, [todoId]: updatedTodo };

  return updatedTodos;
};
