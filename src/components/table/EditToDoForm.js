import React, { useState } from "react";

import "./EditToDoForm.css";

const EditToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState(null);
  const [enteredDelete, setEnteredDelete] = useState(false)
  const [checkState, setCheckState] = useState(false);
  const [temp, setTemp] = useState(null);

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const dueDateChangeHandler = (event) => {
    setEnteredDueDate(event.target.value);
    setTemp(event.target.value)
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    const toDoData = {
      text: enteredText,
      priority: enteredPriority,
      dueDate: new Date(enteredDueDate),
    };

    if (enteredText === "") toDoData.text = null
    if (enteredDueDate === null) toDoData.dueDate = null
    if (enteredPriority === "") toDoData.priority = null

    props.onSaveToDoData(toDoData, enteredDelete);
    setEnteredText("");
    setEnteredPriority("");
    setEnteredDueDate("");
  };

  const stateHandler = () => {
    setCheckState(!checkState)
    if (checkState === false) {
      setEnteredDueDate(null)
      setEnteredDelete(true)
    }
    if (checkState === true) {
      setEnteredDueDate(temp)
      setEnteredDelete(false)
    }
  }

  return (
    <div className="overlay-edit">
      <div className="modalContainer">
        <form onSubmit={submitFormHandler}>
          <div className="edit__controls">
            <div className="edit__control">
              <label>To Do Content:</label>
              <input
                type="text"
                value={undefined}
                placeholder="To Do content..."
                onChange={textChangeHandler}
              />
            </div>
            <div className="edit__control">
              <label>Priority:</label>
              <select value={enteredPriority} onChange={priorityChangeHandler}>
                <option value="" disabled hidden>Choose here...</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="edit__date">
              <label>
                Remove Due Date:
                <input
                  type="checkbox"
                  checked={checkState}
                  onChange={stateHandler}
                ></input>
              </label>
              <div className={checkState === false ? "edit__date-2" : "edit-invisible"}>
                <input
                  type="date"
                  value={undefined}
                  min="2022-01-01"
                  max="2024-12-31"
                  onChange={dueDateChangeHandler}
                />
              </div>
            </div>
            <div className="edit__actions">
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
