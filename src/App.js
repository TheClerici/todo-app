import React from "react";

import ToDoItem from "./components/ToDoItem";
import ToDoTable from "./table/ToDoTable";
import './App.css'

const App = () => {

  return (
    <div>
      <h3 className="app-header"> To-Do App </h3>
      <ToDoTable></ToDoTable>
      <h3> s p a c e </h3>
      <ToDoItem></ToDoItem>
    </div>
  );
};

export default App;