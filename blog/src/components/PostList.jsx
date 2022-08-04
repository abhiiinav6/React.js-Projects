import React, { useEffect } from "react";
import { fetchPostAndUsers } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import UserHeader from "./UserHeader"

function PostList() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(fetchPostAndUsers())
  }, [])
  

  return (
    <div className="ui relaxed divided list">
      {
        posts.map(post => (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user"></i>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default PostList
