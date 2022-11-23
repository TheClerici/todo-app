import React, { useState, useEffect } from "react";

import FilterToDos from "./components/filter/FilterToDos";
import NewToDoandClearToDos from "./components/newToDoForm/NewToDoandClearToDos";
import ToDoTable from "./components/table/ToDoTable";
import Pagination from "./components/pagination/Pagination";
import Stats from "./components/stats/Stats";

import axios from "axios";
import './App.css'
import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [stats, setStats] = useState([]);
  const [url, setUrl] = useState("http://localhost:9090/api/todos?name=&priority=&isDone=&priorityOrder=&dueDateOrder=&page=");
  const [urlPages, setUrlPages] = useState("http://localhost:9090/api/todos/size?name=&priority=&isDone=");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const [isDone, setIsDone] = useState("");
  const [priorityOrder, setPriorityOrder] = useState("");
  const [dueDateOrder, setDueDateOrder] = useState("");
  const [page, setPage] = useState("");
  const [nPages, setNPages] = useState(1);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {setToDos(response.data)});
    axios.get(urlPages).then((response) => {setNPages(Math.ceil(response.data / 10))})
    axios.get("http://localhost:9090/api/todos/stats").then((response) => {setStats(response.data)})
  });

  const addToDoHandler = (toDo) => {
    axios.post("http://localhost:9090/api/todos", toDo)
    .catch((error) => {
      setErrorMsg(error.response.data.error)
      setStatus(error.response.data.status)
      setMessage(error.response.data.message)
      setError(true)
    })
  }

  const deleteToDosHandler = () => {
    axios.delete("http://localhost:9090/api/todos")
    .catch((error) => {
      setErrorMsg(error.response.data.error)
      setStatus(error.response.data.status)
      setMessage(error.response.data.message)
      setError(true)
    })
  }

  const editToDoHandler = (id, toDo, enteredDelete) => {
    axios.put(`http://localhost:9090/api/todos/${id}/${enteredDelete}`, toDo)
    .catch((error) => {
      setErrorMsg(error.response.data.error)
      setStatus(error.response.data.status)
      setMessage(error.response.data.message)
      setError(true)
    })
  }

  const deleteToDoHandler = (id) => {
    axios.delete(`http://localhost:9090/api/todos/${id}`)
    .catch((error) => {
      setErrorMsg(error.response.data.error)
      setStatus(error.response.data.status)
      setMessage(error.response.data.message)
      setError(true)
    })
  }

  const filterToDosHandler = (data) => {
    setText(data.text);
    setPriority(data.priority)
    setIsDone(data.isDone)
    setUrl(`http://localhost:9090/api/todos?name=${data.text}&priority=${data.priority}&isDone=${data.isDone}&priorityOrder=${priorityOrder}&dueDateOrder=${dueDateOrder}&page=${page}`)
    setUrlPages(`http://localhost:9090/api/todos/size?name=${data.text}&priority=${data.priority}&isDone=${data.isDone}`)
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
    if (status === "undone") {
      axios.put(`http://localhost:9090/api/todos/${id}/done`)
      .catch((error) => {
        setErrorMsg(error.response.data.error)
        setStatus(error.response.data.status)
        setMessage(error.response.data.message)
        setError(true)
      })
    }
    if (status === "done") {
      axios.put(`http://localhost:9090/api/todos/${id}/undone`)
      .catch((error) => {
        setErrorMsg(error.response.data.error)
        setStatus(error.response.data.status)
        setMessage(error.response.data.message)
        setError(true)
      })
    }
  }

  const pageHandler = (currentPage) => {
    setPage(currentPage)
    setUrl(`http://localhost:9090/api/todos?name=${text}&priority=${priority}&isDone=${isDone}&priorityOrder=${priorityOrder}&dueDateOrder=${dueDateOrder}&page=${currentPage}`)
  }

  const errorStateHandler = () => {
    setError(false)
  }

  return (
    <div>
      {error && <ErrorModal error={errorMsg} status={status} message={message} onClose={() => errorStateHandler()}/>}
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
      <div className="total">Total pages: {nPages}</div>
      <Stats items={stats}/>
    </div>
  );
};

export default App;