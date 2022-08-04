let id = 2000

const addTaskReducer = (state=[], action) => {
    if(action.type === "ADD_TASK"){
        let newTask = {...action.payload , id: id++}
        return [...state, newTask]
    }

    if(action.type==="DELETE_TASK"){
        return state.filter(task=>id!==action.payload)
    }
    return state
}

export default addTaskReducer