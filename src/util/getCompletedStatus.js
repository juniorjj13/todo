export const getCompletedStatus = (toDoList, status) =>
  toDoList.filter((task) => {
    if (status === "complete") {
      return task.complete;
    }
    return !task.complete;
  });
