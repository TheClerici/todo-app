import React, { useState } from "react";

import axios from "axios";

const ToDoForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");
  const url = "http://localhost:9090/api/todos";

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  }

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  }

  const dueDateChangeHandler = (event) => {
    setEnteredDueDate(event.target.value);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    const toDoData = {
        text: enteredText,
        priority: enteredPriority,
        dueDate: new Date (enteredDueDate)
    };

    axios.post(url, toDoData)
        .then(response => console.log('Posting data', response))
        .catch(error => console.log(error))

    props.onSaveToDoData(toDoData);
    setEnteredText('');
    setEnteredPriority('');
    setEnteredDueDate('');
  }

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="text"
        value={enteredText}
        required="required"
        placeholder="To Do content..."
        onChange={textChangeHandler}
      />
      <input
        type="text"
        value={enteredPriority}
        required="required"
        placeholder="To Do priority..."
        onChange={priorityChangeHandler}
      />
      <input
        type="date"
        value={enteredDueDate}
        required="required"
        onChange={dueDateChangeHandler}
      />
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default ToDoForm;
