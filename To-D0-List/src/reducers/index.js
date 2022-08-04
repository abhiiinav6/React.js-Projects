import { combineReducers, createStore } from "redux";
import addTaskReducer from "./addTaskReducer"


const store = createStore(combineReducers({
    tasks: addTaskReducer
}))

export default store