import React, { useState, useMemo, useCallback, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "./data.json";
import "./App.css";

// components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Pomodoro from "./components/Pomodoro";

// context
export const TodoContext = createContext();

function App() {
  const [toDoList, setToDoList] = useState(data);
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

  const addTask = (userInput) => {
    const copy = [
      ...toDoList,
      { id: uuidv4(), task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <TodoContext.Provider value={{ toDoList, setToDoList }}>
        <Header />
        <div className="container">
          {/* <Card /> */}
          <p className="createdTasks">Created tasks: {treatedToDos.length}</p>
          <p>
            Done tasks {completedToDos.length} of {toDoList.length}
          </p>
        </div>
        <Pomodoro />
        <ToDoList
          toDoList={treatedToDos}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          handleFiltered={handleFiltered}
          handleAllFiltered={handleAllFiltered}
          setToDoList={setToDoList}
        />
        <ToDoForm addTask={addTask} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
