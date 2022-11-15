import React, { useState } from "react";

import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
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
      dueDate: new Date(enteredDueDate),
    };

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
                value={enteredText}
                required="required"
                placeholder="To Do content..."
                onChange={textChangeHandler}
              />
            </div>
            <div className="new-todo__control">
              <label>Priority:</label>
              <select value={enteredPriority} required="required" onChange={priorityChangeHandler}>
                <option value="" selected disabled hidden>---- Choose here ----</option>
                <option value="a">Low</option>
                <option value="b">Medium</option>
                <option value="c">High</option>
              </select>
            </div>
            <div className="new-todo__control">
              <label>Due Date:</label>
              <input
                type="date"
                value={enteredDueDate}
                min="2022-01-01"
                max="2024-12-31"
                required="required"
                onChange={dueDateChangeHandler}
              />
            </div>
            <div className="new-todo__actions">
              <button type="button" onClick={props.onCancel}>
                Cancel
              </button>
              <button type="submit">Add ToDo</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
