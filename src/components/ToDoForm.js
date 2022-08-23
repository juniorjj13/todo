import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState({ task: "", complete: "" });

  const { toDoList, setToDoList } = useContext(TodoContext);

  // const handleChange = (e) => {
  //   setUserInput(e.currentTarget.value);
  // };

  // const addTask = (userInput) => {
  //   const copy = [
  //     ...toDoList,
  //     { id: uuidv4(), task: userInput, complete: false },
  //   ];
  //   setToDoList(copy);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTask(userInput);
  //   setUserInput("");
  // };

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    let task = {
      ...toDoList,
      task: userInput.task,
      id: uuidv4(),
      complete: userInput.complete,
    };

    fetch("http://localhost:3002/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((response) => response.json().then((data) => setToDoList(data)));

    setUserInput({ task: "", complete: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput.task}
        type="text"
        //onChange={handleChange}
        onChange={(event) =>
          setUserInput({ ...userInput, task: event.target.value })
        }
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
