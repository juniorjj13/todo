import db from '../firebase';
import { useEffect } from "react";
import { collection, addDoc,  } from "firebase/firestore"; 
import { createContext ,useState } from "react";
import firebase from '../firebase';
import { logDOM } from '@testing-library/react';
export const TodoContext = createContext();


// todo: get all the items from the collection "todo" in the TodoList 

const TodoContextProvider = ({children}) => {
    const [toDoList, setToDoList ] = useState([]);
    const [view, setView] = useState("all");

    const getTodos = async () =>  {
        
        const snapshot = await addDoc(collection(db, "todo"))
        .orderBy("timestamp", "asc")
        .get()
        return setToDoList(snapshot.docs.map(doc => doc.data()));
    }   

    useEffect(()=>{
        getTodos() 
    },[]);

// getDocs(todoCollectionRef)
//   .then((snapshopt) => {
//     let todo = [];
//     snapshopt.docs.forEach((doc) => {
//       todo.push({ ...doc.data(), id: doc.id });
//     });
//     console.log("uno dos", todo);
//   })
//   .catch((err) => console.log(err));


    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList, view, setView}}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;