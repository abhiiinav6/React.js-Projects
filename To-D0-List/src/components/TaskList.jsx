import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
    let tasks = useSelector(state=> state.tasks)
    console.log(tasks)
  return (
    <div>
        {tasks&&tasks.map(task=>(
            <React.Fragment key={task.id}>
            <input type="checkbox" id={task.id}/>
            <label htmlFor={task.id}> {task.title} </label>
            </React.Fragment>
            
        ))}
    </div>
  )
}

export default TaskList