import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";

const Delete = ({ id }) => {
  // delete function
  const { toDoList, setToDoList } = useContext(TodoContext);

  const handleDelete = (taskId) => {
    fetch(`http://localhost:3003/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId }),
    }).then((response) => response.json().then((data) => setToDoList(data)));
  };

  return <button onClick={() => handleDelete(id)}>x</button>;
};

export default Delete;
