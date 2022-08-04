import React, { useState, useMemo, useContext } from "react";

// import data from "./data.json";
import "./App.css";

// components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Pomodoro from "./components/Pomodoro";

// context

import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        {/* <Card /> */} // To Do Junior : turn the below into a new component
        and get data from context
        {/* <div className="container">
          <p className="createdTasks">Created tasks: {treatedToDos.length}</p>
          <p>
            Done tasks {completedToDos.length} of {toDoList.length}
          </p>
        </div> */}
        <Pomodoro />
        <ToDoList />
        <ToDoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
