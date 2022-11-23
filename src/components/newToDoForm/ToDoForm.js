import React, { useState } from "react";

import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState(null);
  const [checkState, setCheckState] = useState(false);

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

    if (enteredDueDate === null) toDoData.dueDate = null;

    props.onSaveToDoData(toDoData);
    setEnteredText("");
    setEnteredPriority("");
    setEnteredDueDate("");
  };

  const stateHandler = () => {
    setCheckState(!checkState)
    if (checkState === true) setEnteredDueDate(null)
  }

  return (
    <div className="overlay__add">
      <div className="modalContainer__add">
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
              <select
                value={enteredPriority}
                required="required"
                onChange={priorityChangeHandler}
              >
                <option value="" disabled hidden>
                  Choose here...
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="new-todo__date">
              <label>
                Set Due Date:
                <input
                  type="checkbox"
                  checked={checkState}
                  onChange={stateHandler}
                ></input>
              </label>
              <div className={checkState === true ? "new-todo__date-2" : "date-invisible"}>
                <input
                  type="date"
                  value={undefined}
                  min="2022-01-01"
                  max="2024-12-31"
                  onChange={dueDateChangeHandler}
                />
              </div>
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
