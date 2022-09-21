import { db, todoCollectionRef } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useCallback } from "react";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [view, setView] = useState("all");

  const getTodos = useCallback(async () => {
    getDocs(todoCollectionRef)
      .then((snapshopt) => {
        let todo = [];
        snapshopt.docs.forEach((doc) => {
          todo.push({ ...doc.data(), anotherid: doc.id });
        });
        setToDoList(todo);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToDos = useCallback(
    async (task, complete) => {
      const todoDoc = {
        id: uuidv4(),
        task: task,
        complete: complete,
        timestamp: Date.now(),
      };

      const test = await addDoc(todoCollectionRef, todoDoc);
      //add new item to ToDoList
      setToDoList([...toDoList, { ...todoDoc, anotherid: test.id }]);
    },
    [toDoList]
  );

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <TodoContext.Provider
      value={{ toDoList, setToDoList, view, setView, addToDos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
