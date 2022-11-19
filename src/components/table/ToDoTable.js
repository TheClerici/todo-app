import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai";

import EditToDoForm from "./EditToDoForm";
import Checkbox from "./Checkbox";
import "./ToDoTable.css";

const ToDoTable = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState("");
  const [enteredPriorityOrder, setEnteredPriorityOrder] = useState("");
  const [enteredDueDateOrder, setEnteredDueDateOrder] = useState("");

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

  const priorityOrderChangeHandler = (event) => {
    setEnteredPriorityOrder(event.target.value);
    props.onPriorityOrder(event.target.value);
  };

  const dueDateOrderChangeHandler = (event) => {
    setEnteredDueDateOrder(event.target.value);
    props.onDueDateOrder(event.target.value);
  }

  const changeStatusHandler = (id, status) => {
    props.onStatus(id, status)
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="checkbox">
              <input type="checkbox"></input>
            </th>
            <th className="name">Name</th>
            <th className="priority">
              Priority
              <select className="table-select" value={enteredPriorityOrder} onChange={priorityOrderChangeHandler}>
                <option value="">-- None</option>
                <option value="low">↓ Low to High</option>
                <option value="high">↑ High to Low</option>
              </select>
            </th>
            <th className="dueDate">
              Due date
              <select className="table-select" value={enteredDueDateOrder} onChange={dueDateOrderChangeHandler}>
                <option value="">-- None</option>
                <option value="normal">↓ Upcoming</option>
                <option value="reversed">↑ Furthest</option>
              </select>
            </th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((toDo) => (
            <tr key={toDo.id}>
              <td>
                <Checkbox
                  id={toDo.id}
                  status={toDo.isDone}
                  onChangeStatus={changeStatusHandler}
                />
              </td>
              <td className={toDo.isDone === "done" ? "doneText" : "text"}>{toDo.text}</td>
              <td>{toDo.priority}</td>
              <td>{toDo.dueDate}</td>
              <td>
                {!isEditing && <button onClick={() => startEditingHandler(toDo.id)}><FaEdit/></button>}
                {isEditing && (
                  <EditToDoForm 
                   onSaveToDoData={editToDoHandler}
                   onCancel={stopEditingHandler}
                   />
                )}
                <button type="button" onClick={() => props.onDelete(toDo.id)}><AiFillDelete/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTable;
