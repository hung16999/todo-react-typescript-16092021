import React, { useState } from "react";
import FormInsert from "./components/FormInsert";
import TasksList from "./components/TasksList";
import Title from "./components/Title";
import { arrTasks, task } from "./constants/arrTasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState<task[]>(arrTasks);

  return (
    <div className="todo-app">
      <Title />
      <FormInsert setData={setTasks} tasks={tasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
