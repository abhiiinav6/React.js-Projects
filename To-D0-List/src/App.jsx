import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        margin: "5rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}
    >
      <h1>To Do List</h1>
      <TaskList />
      <Input />
    </div>
  );
}

export default App;
