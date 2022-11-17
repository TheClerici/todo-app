import React, { useState, useEffect } from "react";

import NewToDoandClearToDos from "./components/newToDoForm/NewToDoandClearToDos";
import ToDoTable from "./components/table/ToDoTable";
import axios from "axios";
import './App.css'

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [url, setUrl] = useState("http://localhost:9090/api/todos?name=&priority=&isDone=&order=&page=");

  useEffect(() => {
    axios.get(url).then((response) => {setToDos(response.data)});
  });

  const addToDoHandler = (toDo) => {
    axios.post("http://localhost:9090/api/todos", toDo)
  }

  const deleteToDosHandler = () => {
    axios.delete("http://localhost:9090/api/todos")
  }

  const editToDoHandler = (id, toDo) => {
    axios.put(`http://localhost:9090/api/todos/${id}`, toDo)
  }

  const deleteToDoHandler = (id) => {
    axios.delete(`http://localhost:9090/api/todos/${id}`)
  }

  return (
    <div>
      <h3 className="app-header"> To-Do App </h3>
      <NewToDoandClearToDos 
        onAddToDo={addToDoHandler} 
        onDeleteToDos={deleteToDosHandler}
      />
      <ToDoTable 
        items={toDos}
        onEditToDo={editToDoHandler}
        onDelete={deleteToDoHandler}
      />
    </div>
  );
};

export default App;