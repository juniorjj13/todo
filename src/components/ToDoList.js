import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
  handleFiltered,
  handleAllFiltered,
}) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id} // will be unique forever
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleFiltered={handleFiltered}
            handleAllFiltered={handleAllFiltered}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
      <button style={{ margin: "20px" }} onClick={handleFiltered}>
        Display completed tasks
      </button>
      <button style={{ margin: "20px" }} onClick={handleAllFiltered}>
        Display All tasks
      </button>
    </div>
  );
};

export default ToDoList;
