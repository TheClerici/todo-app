import React from "react";

import "./ClearToDos.css";

const ClearToDos = (props) => {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="clear-todo__controls">
          <div className="clear-todo__control">
            <label>You really want to Delete all To Do's?</label>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="button" onClick={props.onDeleteAll}>
              Delete ToDo's
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearToDos;
