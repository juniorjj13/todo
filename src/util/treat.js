export const treat = (view, completedToDos, notCompletedToDos, toDoList) => {
  let list = [];
  switch (view) {
    case "completed":
      list = completedToDos;
      break;
    case "incomplete":
      list = notCompletedToDos;
      break;
    default:
      list = toDoList;
  }
  return list;
};
