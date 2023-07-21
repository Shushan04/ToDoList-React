import React from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({ input, setInput, todos, setTodos}) => {

 // Event handler to update the input state whenever the input field value changes.
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  // Event handler to handle form submission (add or update a todo item).
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed: false }]);
    setInput('');


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



