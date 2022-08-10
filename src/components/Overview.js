import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Overview = () => {
  const { toDoList } = useContext(TodoContext);

  return (
    <div className="container">
      <p className="createdTasks">Created tasks: {treatedToDos.length}</p>
      <p>
        Done tasks {completedToDos.length} of {toDoList.length}
      </p>
    </div>
  );
};

export default Overview;
