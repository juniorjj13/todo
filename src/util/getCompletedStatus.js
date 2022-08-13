/**
 * It takes a list of tasks and a status, and returns a list of tasks that match the status.
 * @param toDoList - an array of objects
 * @param status - "complete" or "incomplete"
 * Sorting todoList in order to show the quantity of tasks that match the status.
 */
export const getCompletedStatus = (toDoList, status) =>
  toDoList.filter((task) => {
    if (status === "complete") {
      return task.complete;
    }
    return !task.complete;
  });
