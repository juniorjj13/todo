import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState({ task: "", complete: false });

  const { toDoList, setToDoList } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let task = {
      id: uuidv4(),
      task: userInput.task,
      complete: userInput.complete,
    };
    console.log(task);
    fetch("http://localhost:3003/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((response) => response.json().then((data) => setToDoList(data)));

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
