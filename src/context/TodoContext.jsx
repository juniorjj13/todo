import { useEffect } from "react";
import { createContext ,useState } from "react";
export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [toDoList, setToDoList ] = useState([]);
    const [view, setView] = useState("all");
    
    useEffect(() => {
        fetch('http://localhost:3002')
        .then((response) => response.json())
        .then((data) => setToDoList(data));
    },[]);
    
    

    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList, view, setView}}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;