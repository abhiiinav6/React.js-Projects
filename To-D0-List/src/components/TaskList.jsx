import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../actions";

function TaskList() {
  const dispatch = useDispatch();
  let tasks = useSelector((state) => state.tasks);

  const onChangeHandler = (id) => {
    console.log("change")
    dispatch(toggleTask(id));
  };


  const onDelete = id => {
    dispatch(deleteTask(id))
  }

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
            <input
              type="checkbox"
              id={task.id}
              onChange={() => onChangeHandler(task.id)}
            />
            <label
              htmlFor={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {task.title}{" "}
            </label>
            <button  onClick={()=>onDelete(task.id)} >Delete</button>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
