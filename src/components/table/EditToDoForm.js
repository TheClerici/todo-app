import React, { useState } from "react";

import "../newToDoForm/ToDoForm.css";

const EditToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState(null);
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState(null);

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const dueDateChangeHandler = (event) => {
    setEnteredDueDate(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    const toDoData = {
      text: enteredText,
      priority: enteredPriority,
      dueDate: new Date(enteredDueDate)
    };

    if (enteredDueDate === null) toDoData.dueDate =  null
    if (enteredPriority === "") toDoData.priority = null

    props.onSaveToDoData(toDoData);
    setEnteredText("");
    setEnteredPriority("");
    setEnteredDueDate("");
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <form onSubmit={submitFormHandler}>
          <div className="new-todo__controls">
            <div className="new-todo__control">
              <label>To Do Content:</label>
              <input
                type="text"
                value={undefined}
                placeholder="To Do content..."
                onChange={textChangeHandler}
              />
            </div>
            <div className="new-todo__control">
              <label>Priority:</label>
              <select value={enteredPriority} onChange={priorityChangeHandler}>
                <option value="" disabled hidden>Choose here...</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="new-todo__control">
              <label>Due Date: (If you don't fill it will be set to NO due date)</label>
              <input
                type="date"
                value={undefined}
                min="2022-01-01"
                max="2024-12-31"
                onChange={dueDateChangeHandler}
              />
            </div>
            <div className="new-todo__actions">
              <button type="button" onClick={props.onCancel}>
                Cancel
              </button>
              <button type="submit">Edit ToDo</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditToDoForm;
