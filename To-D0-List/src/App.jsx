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
      To Do List
      <TaskList />
      <Input />
    </div>
  );
}

export default App;
