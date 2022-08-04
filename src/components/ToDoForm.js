import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");

  const { toDoList, setToDoList } = useContext(TodoContext);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const addTask = (userInput) => {
    const copy = [
      ...toDoList,
      { id: uuidv4(), task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
