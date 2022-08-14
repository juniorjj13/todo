import { createContext ,useState } from "react";
// import data from "../data.json";
export const TodoContext = createContext();

const data = fetch('http://localhost:3001')
.then((response) => response.json())
.then((data) => console.log("hi", data));

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