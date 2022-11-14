import React, { useState } from "react";

const ToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");

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
    <form onSubmit={submitFormHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Name:</label>
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
        <input
          type="text"
          value={enteredPriority}
          required="required"
          placeholder="To Do priority..."
          onChange={priorityChangeHandler}
        />
        </div>
        <div className="new-todo__control">
          <label>Due Date:</label>
        <input
          type="date"
          value={enteredDueDate}
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
  );
};

export default ToDoForm;
