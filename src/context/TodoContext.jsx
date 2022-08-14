import { createContext ,useState } from "react";
import data from "../data.json";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

    const [toDoList, setToDoList ] = useState(data);
    const [view, setView] = useState("all");
   

    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList, view, setView}}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;