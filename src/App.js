import React, { useState, useEffect } from "react";

import NewToDo from "./components/newToDoForm/NewToDo";
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

  return (
    <div>
      <h3 className="app-header"> To-Do App </h3>
      <NewToDo onAddToDo={addToDoHandler}/>
      <ToDoTable items={toDos}/>
    </div>
  );
};

export default App;