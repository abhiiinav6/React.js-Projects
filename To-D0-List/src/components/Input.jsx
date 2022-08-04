import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions'

function Input() {
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const Task = () => {
        if(task==="") return
        const data = { title: task, completed: false }
        dispatch(addTask(data))
        setTask("")
    }
    return (
        <div>
            <input type="text" value={task} onChange={(e) => { onChangeHandler(e) }} />
            <button onClick={Task}>Add</button>
        </div>
    )
}

export default Input