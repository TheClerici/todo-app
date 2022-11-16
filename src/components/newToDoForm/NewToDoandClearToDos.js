import React, { useState } from "react";
import ClearToDos from "./ClearToDos";

import "./NewToDoandClearToDos.css";
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
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

  const deleteToDosDataHandler = () => {
    props.onDeleteToDos();
    setIsDeleting(false);
  }

  const startDeletingHandler = () => {
    setIsDeleting(true);
  };

  const stopDeletingHandler = () => {
    setIsDeleting(false);
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
      {!isDeleting && <button onClick={startDeletingHandler}>Clear All To Do's</button>}
      {isDeleting && (
        <ClearToDos
        onDeleteAll={deleteToDosDataHandler}
        onCancel={stopDeletingHandler}
        />
      )}
    </div>
  );
};

export default NewToDo;
