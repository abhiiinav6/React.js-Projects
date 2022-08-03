import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducers"

const store = createStore( combineReducers({
    posts: postReducer,
    users: userReducer
}), applyMiddleware(thunk))

export default store
