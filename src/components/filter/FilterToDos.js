import React,{ useState } from "react";

import "./FilterToDos.css";

const FilterToDos = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredIsDone, setEnteredIsDone] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };
  
  const isDoneChangeHandler = (event) => {
    setEnteredIsDone(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const filterData = {
      text: enteredText,
      priority: enteredPriority,
      isDone: enteredIsDone,
    };

    props.onFilterToDos(filterData);
  };

  return (
    <div className="filter">
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={enteredText}
            placeholder="To Do content..."
            onChange={textChangeHandler}
          />
        </div>
        <div>
          <label>Priority:</label>  
          <select value={enteredPriority} onChange={priorityChangeHandler}>
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
        <label>Is Done?</label>  
          <select value={enteredIsDone} onChange={isDoneChangeHandler}>
            <option value="">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default FilterToDos;
