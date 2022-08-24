import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";

const Delete = ({ id }) => {
  // delete function
  const { toDoList, setToDoList } = useContext(TodoContext);

  // useEffect(() => {
  //   // DELETE request using fetch inside useEffect React hook

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  const handleDelete = (taskId) => {
    //setToDoList(toDoList.filter((item) => item.id !== taskId));
    fetch("http://localhost:3003/delete/id", { method: "DELETE" }).then(() =>
      //setToDoList("Delete successful")
      setToDoList(toDoList.filter((item) => item.id !== taskId))
    );
  };

  return <button onClick={() => handleDelete(id)}>x</button>;
};

export default Delete;
