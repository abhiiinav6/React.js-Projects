import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

function App() {
  const taskCount = useSelector((state) => state.tasks.length);
  const completedTaskCount = useSelector((state) =>
    state.tasks.reduce((x, y) => {
      return x + y.completed;
    }, 0)
  );
  return (
    <div
      className="App"
      style={{
        width: "100%",
        margin: "5rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>To Do List</h1>
      <TaskList />
      <Input />
      <h3 style={{margin: "0"}}>Completed Task : {completedTaskCount}</h3>
      <h3 style={{margin: "0"}}>Total task : {taskCount}</h3>
    </div>
  );
}

export default App;
