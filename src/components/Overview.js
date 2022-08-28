import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { getCompletedStatus } from "../util/getCompletedStatus";
import { treat } from "../util/treat";

const Overview = () => {
  const { toDoList, view } = useContext(TodoContext);

  return (
    <div className="container">
      <p className="createdTasks">
        Created tasks:{" "}
        {
          treat(
            view,
            getCompletedStatus(toDoList, "complete"),
            getCompletedStatus(toDoList, "incomplete"),
            toDoList
          ).length
        }
      </p>
      <p>
        Done tasks: {getCompletedStatus(toDoList, "complete").length} of{" "}
        {toDoList.length}
      </p>
    </div>
  );
};

export default Overview;
