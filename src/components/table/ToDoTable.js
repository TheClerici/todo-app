import React, { useState } from "react";

import EditToDoForm from "./EditToDoForm";
import "./ToDoTable.css";

const ToDoTable = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState("");
  const [toDoState, setToDoState] = useState([]);

  const editToDoHandler = (enteredData) => {
    const toDoData = {
      ...enteredData,
    };
    props.onEditToDo(id, toDoData)
    setId("");
    setIsEditing(false);
  };

  const startEditingHandler = (toDoId) => {
    setId(toDoId);
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const stateHandler = (id) => {
    props.items.map((data) => {
      if (data.id === id) setToDoState(!toDoState)
    })
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>To Do's</th>
            <th>Priority</th>
            <th>Due date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((toDo) => (
            <tr key={toDo.id}>
              <td>
                <input onChange={() => stateHandler(toDo.id)} type="checkbox" checked={toDoState}></input>
              </td>
              <td>{toDo.text}</td>
              <td>{toDo.priority}</td>
              <td>{toDo.dueDate}</td>
              <td>
                <div className="container-button">
                {!isEditing && <button onClick={() => startEditingHandler(toDo.id)}>Edit</button>}
                {isEditing && (
                  <EditToDoForm 
                   onSaveToDoData={editToDoHandler}
                   onCancel={stopEditingHandler}
                   />
                )}
                <button type="button" onClick={() => props.onDelete(toDo.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTable;
