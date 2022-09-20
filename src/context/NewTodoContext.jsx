import { createContext ,useState, useEffect} from "react";
import db from '../firebase';
import { collection, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";

export const TaskContext = createContext();


const TaskContextProvider = ({children}) => { 
    const [toDoList, setToDoList ] = useState([]);
    const [view, setView] = useState("all");
    
    
// from firebase to fetch data once (maybe it works here since we are using react) https://firebase.google.com/docs/firestore/query-data/get-data
    const docRef = doc(db, "todo", "todo");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");

    }

  // from firebase to get realTime updates https://firebase.google.com/docs/firestore/query-data/listen
    const unsub = onSnapshot(doc(db, "todo", "todo"), (doc) => {
        console.log("Current data: ", doc.data());
    });



    return (
      <TodoContext.Provider  value={{ toDoList, setToDoList, view, setView}}>
      {children}
      </TodoContext.Provider>)
};

export default TaskContextProvider;