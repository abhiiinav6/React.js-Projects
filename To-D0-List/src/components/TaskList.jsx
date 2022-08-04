import React from "react";
import { useSelector } from "react-redux";

function TaskList() {
  let tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        margin: "auto",
      }}
    >
      {tasks &&
        tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}> {task.title} </label>
            <button>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
