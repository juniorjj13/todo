import React from "react";
import ToDo from "./ToDo";
import Delete from "./Delete";

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
          <>
            <ToDo
              key={todo.id} // will be unique forever
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              handleFiltered={handleFiltered}
              handleAllFiltered={handleAllFiltered}
            />
            <Delete id={todo.id} />
          </>
        );
      })}
      <button className="btnToDo btnClear" onClick={handleFilter}>
        Clear Completed
      </button>
      <button className="btnToDo btnCompleted" onClick={handleFiltered}>
        Display completed tasks
      </button>
      <button className="btnToDo btnAll" onClick={handleAllFiltered}>
        Display All tasks
      </button>
    </div>
  );
};

export default ToDoList;
