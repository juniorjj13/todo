const Delete = ({ setToDoList, toDoList, id }) => {
  // delete function

  const handleDelete = (taskId) => {
    setToDoList(toDoList.filter((item) => item.id !== taskId));
  };

  return <button onClick={() => handleDelete(id)}>x</button>;
};

export default Delete;
