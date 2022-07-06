import "./App.css";
import data from "./data.json";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import Card from "./components/Card.js";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

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

  const addTask = (userInput) => {
    const copy = [
      ...toDoList,
      { id: uuidv4(), task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  //counter (add .length )

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card />
        <p>
          Done tasks {completedToDos.length} of {toDoList.length}
        </p>
      </div>
      {/* {<ToDoCounter taskCounter={taskCounter} />} */}
      <ToDoList
        toDoList={treatedToDos}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
        handleFiltered={handleFiltered}
      />
      <ToDoForm addTask={addTask} />
      <div>
        <p>You have {treatedToDos.length} tasks for the day.</p>
      </div>
    </div>
  );
}

export default App;
