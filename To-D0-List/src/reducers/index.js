import { combineReducers, createStore } from "redux"; 
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import addTaskReducer from "./addTaskReducer"


const store = createStore(combineReducers({
    tasks: addTaskReducer
}), applyMiddleware(thunk))

export default store