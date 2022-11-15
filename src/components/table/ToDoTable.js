import React from "react";

import "./ToDoTable.css";

const ToDoTable = (toDosData) => {
  return (
    <div  className="table-container">
      <table>
        <thead>
          <tr>
            <th>Done?</th>
            <th>To Do's</th>
            <th>Priority</th>
            <th>Due date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toDosData.items.map((toDoData) => (
            <tr key={toDoData.id}>
              <td>{toDoData.isDone}</td>
              <td>{toDoData.text}</td>
              <td>{toDoData.priority}</td>
              <td>{toDoData.dueDate}</td>
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