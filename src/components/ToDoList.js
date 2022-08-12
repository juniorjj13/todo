import { useContext, useMemo } from "react";
import { treat } from "../util/treat";
import ToDo from "./ToDo";
import Delete from "./Delete";
import { TodoContext } from "../context/TodoContext";
import { getCompletedStatus } from "../util/getCompletedStatus";
const ToDoList = () => {
  const { toDoList, setToDoList, view, setView } = useContext(TodoContext);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => ({
      ...task,
      complete: task.id === id ? !task.complete : task.complete,
    }));
    setToDoList(mapped);
  };

  const treatedToDos = useMemo(
    () =>
      treat(
        view,
        getCompletedStatus(toDoList, "complete"),
        getCompletedStatus(toDoList, "incomplete"),
        toDoList
      ),
    [toDoList, view]
  );
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
