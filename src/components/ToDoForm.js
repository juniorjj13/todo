import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
import db from "../firebase";
import { collection, addDocs, serverTimestamp } from "firebase/firestore";

// todo: add a new item bzw. new document to the collection "todo" and update the state bzw. the todoList

const ToDoForm = () => {
  const { toDoList, setToDoList } = useContext(TodoContext);
  const [userInput, setUserInput] = useState({ task: "", complete: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    let task = {
      id: uuidv4(),
      task: userInput.task,
      complete: userInput.complete,
      timestamp: serverTimestamp(),
    };

    collection(db, "todo/todo")
      .add(task)
      .then(async () => {
        const snapshot = await db
          .collection("todo")
          .orderBy("timestamp", "desc")
          .get();
        return setToDoList(snapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    setUserInput({ task: "", complete: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="formInput"
        value={userInput.task}
        type="text"
        onChange={(event) =>
          setUserInput({ ...userInput, task: event.target.value })
        }
        placeholder="Your new task..."
      />
      <button className="formBtn btnAll">Submit</button>
    </form>
  );
};

export default ToDoForm;
