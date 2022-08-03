import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducers"

export const InitialStore = {
    posts: [],
    user: {}
}

export default combineReducers({
    posts: postReducer,
    users: userReducer
})
