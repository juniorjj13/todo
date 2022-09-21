import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ToDoForm = () => {
  const { toDoList, setToDoList, addToDos } = useContext(TodoContext);
  const [userInput, setUserInput] = useState({ task: "", complete: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    addToDos(userInput.task, userInput.complete);

    setUserInput({ task: "", complete: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="formInput"
        value={userInput.task}
        type="text"
        onChange={(event) =>
          setUserInput({ ...userInput, task: event.target.value })
        }
        placeholder="Your new task..."
      />
      <button className="formBtn btnAll">Submit</button>
    </form>
  );
};

export default ToDoForm;
