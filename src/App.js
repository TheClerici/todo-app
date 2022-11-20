import React, { useState, useEffect } from "react";

import FilterToDos from "./components/filter/FilterToDos";
import NewToDoandClearToDos from "./components/newToDoForm/NewToDoandClearToDos";
import ToDoTable from "./components/table/ToDoTable";
import Pagination from "./components/pagination/Pagination";

import axios from "axios";
import './App.css'

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [url, setUrl] = useState("http://localhost:9090/api/todos?name=&priority=&isDone=&priorityOrder=&dueDateOrder=&page=");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const [isDone, setIsDone] = useState("");
  const [priorityOrder, setPriorityOrder] = useState("");
  const [dueDateOrder, setDueDateOrder] = useState("");
  const [page, setPage] = useState("");
  const [nPages, setNPages] = useState(1);

  useEffect(() => {
    axios.get(url).then((response) => {
      setToDos(response.data)
      setNPages(1)
      if (response.data !== []) setNPages(Math.ceil(toDos[0].toDosSize / 10))
    });
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

  const filterToDosHandler = (data) => {
    setText(data.text);
    setPriority(data.priority)
    setIsDone(data.isDone)
    setUrl(`http://localhost:9090/api/todos?name=${data.text}&priority=${data.priority}&isDone=${data.isDone}&priorityOrder=${priorityOrder}&dueDateOrder=${dueDateOrder}&page=${page}`)
  }

  const priorityOrderHandler = (order) => {
    setPriorityOrder(order)
    setUrl(`http://localhost:9090/api/todos?name=${text}&priority=${priority}&isDone=${isDone}&priorityOrder=${order}&dueDateOrder=${dueDateOrder}&page=${page}`)
  }

  const dueDateOrderHandler = (order) => {
    setDueDateOrder(order)
    setUrl(`http://localhost:9090/api/todos?name=${text}&priority=${priority}&isDone=${isDone}&priorityOrder=${priorityOrder}&dueDateOrder=${order}&page=${page}`)
  }

  const changeIsDoneHandler = (id, status) => {
    if (status === "undone") axios.put(`http://localhost:9090/api/todos/${id}/done`)
    if (status === "done") axios.put(`http://localhost:9090/api/todos/${id}/undone`)
  }

  const pageHandler = (currentPage) => {
    setPage(currentPage)
    setUrl(`http://localhost:9090/api/todos?name=${text}&priority=${priority}&isDone=${isDone}&priorityOrder=${priorityOrder}&dueDateOrder=${dueDateOrder}&page=${currentPage}`)
  }

  return (
    <div>
      <h3 className="app-header"> To-Do App </h3>
      <FilterToDos onFilterToDos={filterToDosHandler}/>
      <NewToDoandClearToDos 
        onAddToDo={addToDoHandler} 
        onDeleteToDos={deleteToDosHandler}
      />
      <ToDoTable 
        items={toDos}
        onEditToDo={editToDoHandler}
        onDelete={deleteToDoHandler}
        onPriorityOrder={priorityOrderHandler}
        onDueDateOrder={dueDateOrderHandler}
        onStatus={changeIsDoneHandler}
      />
      <Pagination
        totalPages={nPages}
        onPageChange={pageHandler}
      />
    </div>
  );
};

export default App;