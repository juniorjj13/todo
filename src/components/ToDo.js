import React from "react";
import classNames from "classnames";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };

  // styled-components
  return (
    <button
      onClick={handleClick}
      className={classNames("todo", { strike: todo.complete })}
    >
      {todo.task}
    </button>
  );
};

export default ToDo;
