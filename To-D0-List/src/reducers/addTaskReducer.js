let id = 2000

const addTaskReducer = (state=[], action) => {
    if(action.type === "ADD_TASK"){
        let newTask = {...action.payload , id: id++}
        return [...state, newTask]
    }

    if(action.type==="DELETE_TASK"){
        return state.filter(task=>task.id!==action.payload)
    }

    if(action.type === "TOGGLE_TASK"){
        console.log("hii")
        return state.map(task=>{
            if(task.id===action.payload){
              return {  ...task, completed: !(task.completed)}
            }
            return task
        })
    }
    return state
}

export default addTaskReducer