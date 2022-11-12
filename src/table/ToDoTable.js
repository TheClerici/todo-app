import React, { useState } from "react";
import { nanoid } from "nanoid";

import data from "./mock-data.json";
import "./ToDoTable.css";

const ToDoTable = () => {
  const [toDos, setToDos] = useState(data);
  const [addFormData, setAddFormData] = useState({
    isDone: "",
    text: "",
    priority: "",
    dueDate: new Date
  });

  const addFormChangeHandler = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const addFormSubmitHandler = (event) => {
    event.preventDefault();

    const newToDo = {
      id: nanoid(),
      isDone: addFormData.isDone,
      text: addFormData.text,
      priority: addFormData.priority,
      dueDate: addFormData.dueDate
    };

    const newToDos = [...toDos, newToDo];
    setToDos(newToDos);
  };

  return (
    <div  className="table-container">
      <form onSubmit={addFormSubmitHandler}>
        <input
          type="text"
          name="isDone"
          required="required"
          placeholder="Is To Do Done?"
          onChange={addFormChangeHandler}
        />
        <input
          type="text"
          name="text"
          required="required"
          placeholder="To Do content..."
          onChange={addFormChangeHandler}
        />
        <input
          type="text"
          name="priority"
          required="required"
          placeholder="To Do priority..."
          onChange={addFormChangeHandler}
        />
        <input
          type="date"
          name="dueDate"
          required="required"
          onChange={addFormChangeHandler}
        />
        <button type="submit">Add ToDo</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Done?</th>
            <th>To Do:</th>
            <th>Priority:</th>
            <th>Due date:</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDos) => (
            <tr>
              <td>{toDos.isDone}</td>
              <td>{toDos.text}</td>
              <td>{toDos.priority}</td>
              <td>{toDos.dueDate}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTable;