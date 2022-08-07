import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchDummyTask, toggleTask } from "../actions";

function TaskList() {
  const dispatch = useDispatch();
  let tasks = useSelector((state) => state.tasks);

  const onChangeHandler = (id) => {
    console.log("change");
    dispatch(toggleTask(id));
  };

  const onDelete = (task) => {
    if (task.completed) {
      dispatch(deleteTask(task.id));
      return;
    }
    alert("First complete the project to delete it.")
  };

  useEffect(() => {
    dispatch(fetchDummyTask());
  }, []);

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
              checked={task.completed}
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
            <button onClick={() => onDelete(task)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
