import "./App.css";
import data from "./data.json";
import React, { useState } from "react";

// components
import Card from "./components/Card.js";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
{
  // import ToDoCounter from "./components/ToDoCounter";
}

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleFiltered = () => {
    let filtered = toDoList.filter((task) => {
      return task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  //counter (add .length )

  const taskCounter = () => {
    let taskComplete = toDoList.filter((task) => {
      return task.complete;
    });
    setToDoList(taskComplete);
  };

  const length = () => {
    let taskComplete = toDoList;
    taskComplete.filter((task) => {
      let tasksCompleted = task.complete;
      return tasksCompleted.length;
    });
  };

  const tasks = toDoList.length;

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card />
      </div>
      {/* {<ToDoCounter taskCounter={taskCounter} />} */}
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
        handleFiltered={handleFiltered}
      />
      <ToDoForm addTask={addTask} />
      <div>
        <p>You have {tasks} tasks for the day.</p>
      </div>
    </div>
  );
}

export default App;
