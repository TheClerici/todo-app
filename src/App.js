import React, { useState, useEffect } from "react";

import NewToDo from "./components/newToDoForm/NewToDo";
import ToDoTable from "./components/table/ToDoTable";
import axios from "axios";
import './App.css'

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [url, setUrl] = useState("http://localhost:9090/api/todos?name=&priority=&isDone=&order=&page=");


  useEffect(() => {
    const fetchToDos = async () => {
      const getToDos = () => axios.get(url);
      const result = await getToDos();
      setToDos(result.data);
    };
    fetchToDos();
  }, []);

  const addToDoHandler = async () => {
    const fetchToDos = async () => {
      const getToDos = () => axios.get(url);
      const result = await getToDos();
      setToDos(result.data);
    };
    fetchToDos();
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