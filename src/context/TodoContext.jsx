import { todoCollectionRef } from "../firebase";
import {
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useCallback } from "react";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [view, setView] = useState("all");

  // get data TodoList fron server aka. firestore
  const getTodos = useCallback(async () => {
    getDocs(todoCollectionRef)
      //.orderBy("serverTimestamp", "asc")
      .then((snapshopt) => {
        let todo = [];
        snapshopt.docs.forEach((doc) => {
          todo.push({ ...doc.data(), anotherid: doc.id });
        });
        setToDoList(todo);
      })
      .catch((err) => console.log(err));
  }, []);

  //add task
  const addToDos = useCallback(
    async (task, complete) => {
      const todoDoc = {
        id: uuidv4(),
        task: task,
        complete: complete,
        timestamp: serverTimestamp(),
      };

      const addToDoColRef = await addDoc(todoCollectionRef, todoDoc);

      //add new item to ToDoList
      setToDoList([...toDoList, { ...todoDoc, anotherid: addToDoColRef.id }]);
    },
    [toDoList]
  );

  //delete

  // const handleDelete = useCallback(async (userId) => {
  //   //query to sort the items upon a speciific query
  //   const q = query(todoCollectionRef, where("id", "==", "userId"));
  //   console.log(q);
  //   //getting the full object that matches the query parameters
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     //doc.data() is never undefined for query doc snapshots
  //     console.log("testando aqui", doc.id, " => ", doc.data());
  //   });

  //   // const deleteTodo = await deleteDoc(querySnapshot)
  //   //   .then(() => {
  //   //     console.log("Deleted!");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });
  // }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <TodoContext.Provider
      value={{
        toDoList,
        setToDoList,
        view,
        setView,
        addToDos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
