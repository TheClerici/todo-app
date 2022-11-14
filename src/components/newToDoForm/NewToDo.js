import React, { useState } from "react";

import "./NewToDo.css";
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString(),
    };
    props.onAddToDo(toDoData);
    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-todo">
      {!isAdding && <button onClick={startAddingHandler}>Add ToDo</button>}
      {isAdding && (
        <ToDoForm 
        onSaveToDoData={saveToDoDataHandler}
        onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewToDo;
