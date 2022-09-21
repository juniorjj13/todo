// import { createContext, useState, useEffect } from "react";
// import db from "../firebase";
// import {
//   collection,
//   getDocs,
//   doc,
//   getDoc,
//   addDoc,
//   onSnapshot,
// } from "firebase/firestore";

// export const TodoContext = createContext();

// // todo: get all the items from the collection "todo" in the TodoList

// const TodoContextProvider = ({ children }) => {
//   const [toDoList, setToDoList] = useState([]);
//   const [view, setView] = useState("all");

//   // from firebase to fetch data once (maybe it works here since we are using react) https://firebase.google.com/docs/firestore/query-data/get-data
//   const docRef = doc(db, "todo", "todo");
//   const docSnap = getDoc(docRef);

//   const getTodos = async () => {
//     const snapshot = await docSnap.orderBy("timestamp", "asc").get();
//     return setToDoList(snapshot.docs.map((doc) => doc.data()));
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <TodoContext.Provider value={{ toDoList, setToDoList, view, setView }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export default TodoContextProvider;
