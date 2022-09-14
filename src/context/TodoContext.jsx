import db from '../firebase';
import { useEffect } from "react";
import { createContext ,useState } from "react";
export const TodoContext = createContext();




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