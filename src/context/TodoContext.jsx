import db from '../firebase';
import { useEffect } from "react";
import { createContext ,useState } from "react";
export const TodoContext = createContext();

// from Firebase on how to use onSnapshot
// db.collection("cities").doc("SF")
//     .onSnapshot((doc) => {
//         console.log("Current data: ", doc.data());
//     });


// from https://www.freakyjolly.com/react-firebase-materialui-todo-app-tutorial/#Connect_React_with_Firebase_Application 
// useEffect(() => {
//     console.log('useEffect Hook!!!');

//     db.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
//       console.log('Firebase Snap!');
//       setTodos(snapshot.docs.map(doc => {
//         return {
//           id: doc.id,
//           name: doc.data().todo,
//           datatime: doc.data().datatime
//         }
//       }))
//     })

//   }, []);

const TodoContextProvider = ({children}) => {
    const [toDoList, setToDoList ] = useState([]);
    const [view, setView] = useState("all");
    
    
    const getTodos = async () =>  {

        const snapshot = await db.collection("todo")
        .orderBy("timestamp", "asc")
        .get()
        return setToDoList(snapshot.docs.map(doc => doc.data()));
    }   

    useEffect(()=>{
        getTodos() 
    },[]);
    
    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList, view, setView}}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;