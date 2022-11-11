import React, { useState } from "react";
import { nanoid } from "nanoid";

import ToDoItem from "./components/ToDoItem";
import "./table/ToDoTable.css";
import data from "./mock-data.json";

const App = () => {
  const [toDos, setToDos] = useState(data);
  const [addFormData, setAddFormData] = useState({
    isDone: '',
    content: '',
    priority: '',
    dueDate: ''
  })

  const addFormChangeHandler = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const addFormSubmitHandler = (event) => {
    event.preventDefault();

    const newToDo = {
      id: nanoid(),
      isDone: addFormData.isDone,
      content: addFormData.content,
      priority: addFormData.priority,
      dueDate: addFormData.dueDate
    }

    const newToDos = [...toDos, newToDo];
    setToDos(newToDos);
  }

  return (
    <div className="App-container">
      <h3> To-Do App </h3>
      <table>
        <thead>
          <tr>
            <th>Done?</th>
            <th>To Do:</th>
            <th>Priority:</th>
            <th>Due date:</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDos) => (
            <tr>
              <td>{toDos.isDone}</td>
              <td>{toDos.content}</td>
              <td>{toDos.priority}</td>
              <td>{toDos.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Todo</h3>
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
          name="content"
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
          type="text"
          name="dueDate"
          required="required"
          placeholder="To Do due date..."
          onChange={addFormChangeHandler}
        />
        <button type="submit">Add</button>
      </form>

      <h3> s p a c e </h3>

      <ToDoItem></ToDoItem>
    </div>
  );
};

export default App;