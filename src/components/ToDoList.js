import { useState, useContext, useMemo } from "react";

import ToDo from "./ToDo";
import Delete from "./Delete";
import { TodoContext } from "../context/TodoContext";

const ToDoList = () => {
  const { toDoList, setToDoList } = useContext(TodoContext);
  const [view, setView] = useState("all");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => ({
      ...task,
      complete: task.id === id ? !task.complete : task.complete,
    }));
    setToDoList(mapped);
  };

  const notCompletedToDos = useMemo(
    () =>
      toDoList.filter((task) => {
        return !task.complete;
      }),
    [toDoList]
  );

  const completedToDos = useMemo(
    () =>
      toDoList.filter((task) => {
        return task.complete;
      }),
    [toDoList]
  );

  const treatedToDos = useMemo(() => {
    let list = [];
    switch (view) {
      case "completed":
        list = completedToDos;
        break;
      case "incomplete":
        list = notCompletedToDos;
        break;
      default:
        list = toDoList;
    }
    return list;
  }, [toDoList, view, completedToDos, notCompletedToDos]);
  // useMemo -> retorna variaveis
  // useCallback -> retorna funcoes

  const handleFilter = () => {
    setView("incomplete");
  };

  const handleFiltered = () => {
    setView("completed");
  };

  const handleAllFiltered = () => {
    setView();
  };

  return (
    <div>
      {treatedToDos.map((todo) => {
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
      <br />
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
