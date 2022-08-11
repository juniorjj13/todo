import { createContext ,useState } from "react";
import data from "../data.json";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

    const [toDoList, setToDoList ] = useState(data);
   
    const [treatedToDos] = useState(toDoList);
    

    console.log("hi", treatedToDos);

    const [completedToDos] = useState(toDoList);
    

    console.log("Dale", completedToDos);



    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList, treatedToDos, completedToDos}}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;