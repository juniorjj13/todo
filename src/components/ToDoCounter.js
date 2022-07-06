import React from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";

const ToDoCounter = ({ toDoList, handleFiltered, taskCounter }) => {
  const initialCounter = 0;

  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleFiltered={handleFiltered} />;
      })}

      <span>Finished Tasks: {handleFiltered}</span>
      <span>Pending Tasks: {initialCounter}</span>
    </div>
  );
};

export default ToDoCounter;
