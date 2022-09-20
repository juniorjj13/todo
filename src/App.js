import React from "react";
// import data from "./data.json";
import "./App.css";

// components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Pomodoro from "./components/Pomodoro";
import Overview from "./components/Overview";

// context
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <Overview />
        <Pomodoro />
        <ToDoForm />
        <ToDoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
