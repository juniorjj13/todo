import { createContext ,useState } from "react";
import data from "../data.json";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

    const [toDoList, setToDoList] = useState(data);
   
    console.log( 'hey here', toDoList)


    return(
    <TodoContext.Provider  value={{ toDoList, setToDoList }}>
        {children}
    </TodoContext.Provider>
    )
};


export default TodoContextProvider;