import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Delete = ({ id }) => {
  // delete function
  const { toDoList, setToDoList } = useContext(TodoContext);

  const handleDelete = (taskId) => {
    setToDoList(toDoList.filter((item) => item.id !== taskId));
  };

  return <button onClick={() => handleDelete(id)}>x</button>;
};

export default Delete;
