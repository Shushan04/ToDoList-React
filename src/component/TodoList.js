import React from "react";


const TodosList = ({ todos, setTodos}) => {



  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
            <input 
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
              />
             <div>
                <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                   <i className="fa fa-check"></i>
                </button> 
                
                <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                    <i className="fa fa-edit"></i>
                </button>  
                

                <button className="button-delete task-button" onClick={() => handelDelete(todo)}>
                    <i className="fa fa-trash"></i>
                </button>
             </div> 
        </li>
      )
      )}
    </div>
  );
};

export default TodosList;





