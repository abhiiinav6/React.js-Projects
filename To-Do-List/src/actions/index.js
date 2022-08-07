import axios from "axios"
import jsonPlaceholderAPI from "../api/jsonPlaceholderAPI"

export const addTask = data => {
    return {type: "ADD_TASK", payload: data}
}

export const deleteTask = id => {
    return {type: "DELETE_TASK", payload: id}
}

export const toggleTask = id => {
    return {type: "TOGGLE_TASK", payload: id}
}

export const fetchDummyTask = () => async dispatch => {
    const response = await jsonPlaceholderAPI.get("/todos")
    const data = response.data.splice(0, 10)
    dispatch({type: "FETCH_DUMMY_TASK", payload: data})
}