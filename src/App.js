import React, { useState } from "react";
import Header from "./component/header";
import Form from "./component/form";
import TodosList from "./component/TodoList";
import './app.css';

const App = () =>{
    // Initializing state variables using the "useState" hook.
    const [input,setInput] = useState("");// "input" will hold the user input for the form.
    const [todos,setTodos] = useState([]);// "todos" will hold an array of todo items.
    const [editTodo, setEditTodo] = useState(null);// "editTodo" will hold the todo item being edited (or null if not editing).

    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodosList 
                    todos={todos} 
                    setTodos={setTodos} 
                    setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    )
}
export default App; 



