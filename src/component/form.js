import { useEffect } from 'react';
import React from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
   // Function to update an existing todo item based on its ID.
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }
  // useEffect hook to handle the side effect of editing a todo item.
  useEffect(() => {
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("")
    }
  },[setInput, editTodo]);

 // Event handler to update the input state whenever the input field value changes.
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  // Event handler to handle form submission (add or update a todo item).
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
       setTodos([...todos, {id: uuidv4(), title: input, completed: false }]);
       setInput('');
    }else{
      updateTodo(input, editTodo.id, editTodo.completed)
    }

  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>

        <input
          type="text"
          placeholder="Todo Name..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="add-button" type="submit">
            {editTodo ? "Update" : "Add"}
        </button>
        <input
         type="text"
         placeholder="Search Name..."
         className="task-input"
        />
        <button className="search-button" type="button">
          Search
        </button>

      </form>
    </div>
  );
};

export default Form;



