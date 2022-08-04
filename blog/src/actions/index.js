import _ from "lodash"
import jsonPlaceHolder from "../apis/jsonPlaceHolder"


export const fetchPostAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPost())
    const userIds = _.uniq(_.map(getState().posts, "userId"))
    userIds.forEach(id=>dispatch(fetchUser(id)))
    await console.log(getState())
}

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ type: "FETCH_POST", payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)

    dispatch({type: "FETCH_USER", payload: response.data})
}

