import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ typr: "FETCH_POST", payload: response })
}


