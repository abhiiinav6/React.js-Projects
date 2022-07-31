import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPost = async () => {

    await jsonPlaceHolder.get('/posts')

    return {
        type: "FETCH_POST"
    }
}